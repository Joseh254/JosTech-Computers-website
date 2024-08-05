import { Router } from "express";
import { AddCart, GetUserCart } from "../Controllers/CartController.js";
const router = Router();
router .post("/AddCart",AddCart)
router.get("/GetUserCart/:id", GetUserCart)
export default router