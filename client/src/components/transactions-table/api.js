import config from '../../config.json';

export async function fetchTransactions() {
  try {
    const url = `${config.API_SERVICE}geth/get-transactions`;
    const response = await fetch(url);
    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Failed to fetch all blogs");
    }
  } catch (error) {
    throw new Error(error.message);
  }
}
