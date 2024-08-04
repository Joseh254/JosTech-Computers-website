import { Router } from "express";
import { AddCart } from "../Controllers/CartController.js";
const router = Router();
router .post("/AddCart",AddCart)
export default router