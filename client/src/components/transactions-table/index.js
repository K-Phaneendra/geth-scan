import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useEffect, useState } from "react";
import { fetchTransactions } from "./api";

export default function TransactionsTable() {
  const [transactions, setTransactions] = useState([]);
  const fetchTransactionsAndAssign = async () => {
    const fetchResponse = await fetchTransactions();
    const parsed = [];
    fetchResponse.forEach((each) => {
      parsed.push(JSON.parse(each));
    });
    if (fetchResponse.length > 0) {
      setTransactions(parsed)
    } else {
      setTransactions([]);
    }
  };
  useEffect(() => {
    fetchTransactionsAndAssign();
  }, []);
  return (
    <DataTable value={transactions} tableStyle={{ minWidth: "50rem" }}>
      <Column field="chainId" header="Chain ID"></Column>
      <Column field="blockNumber" header="Block Number"></Column>
      <Column field="from" header="From"></Column>
      <Column field="to" header="To"></Column>
      <Column field="value" header="Value"></Column>
      <Column field="gas" header="Gas"></Column>
    </DataTable>
  );
}
