import express from "express";
import { inventory_list } from "./inventory";

const router = express.Router();

router.get("/inventory/list", inventory_list);

export default router;