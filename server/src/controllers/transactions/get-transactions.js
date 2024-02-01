import Web3 from "web3";

export default async (req, res) => {
  try {
    const web3 = new Web3(
      new Web3.providers.HttpProvider(process.env.GETH_HTTP_PROVIDER)
    );
    var myAddr = process.env.GETH_NODE_ADDRESS;
    var currentBlock = await web3.eth.getBlockNumber();
    var n = await web3.eth.getTransactionCount(myAddr, currentBlock);
    var bal = await web3.eth.getBalance(myAddr, currentBlock);

    const allTransactions = [];

    for (var i = currentBlock; i >= 0 && (n > 0 || bal > 0); --i) {
      try {
        var block = await web3.eth.getBlock(i, true);
        if (block && block.transactions) {
          block.transactions.forEach(function (e) {
            const stringified = JSON.stringify(e, (_, v) => typeof v === 'bigint' ? v.toString() : v)
            allTransactions.push(stringified);
          });
        }
      } catch (e) {
        console.error("Error for block " + i, e);
      }
    }
    res.status(200).send(allTransactions);
  } catch (error) {
    return res.status(400).send(error.errors);
  }
};
