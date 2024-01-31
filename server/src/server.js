import express from 'express'
import cors from "cors";

import blockchainRouter from './routers/blockchain.js';

const app = express();

app.use(cors({ origin: "*" }));

app.use("/geth", blockchainRouter)

app.get("/", (req, res) => {
  res.send('This is API server of geth-scan')
});

export default app;
