import { Router } from "express";
import getTransactions from "../controllers/transactions/get-transactions.js";

const router = Router();

router.get("/get-transactions", getTransactions)

export default router;