import { Router } from "express";
import { AddCart, GetUserCart, deleteCartItem } from "../Controllers/CartController.js";
import { verifyCartUser } from "../Middleware/VerifyCartUser";
const router = Router();
router .post("/AddCart",AddCart)
router.get("/GetUserCart/:id", GetUserCart)
router.delete("/deleteCartItem/:id",deleteCartItem)
export default router