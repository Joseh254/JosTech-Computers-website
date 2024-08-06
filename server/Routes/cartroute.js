import { Router } from "express";
import { AddCart, GetUserCart, deleteCartItem } from "../Controllers/CartController.js";
import { verifyToken } from "../Middleware/VerifyCartUser.js";
const router = Router();
router .post("/AddCart",AddCart)
router.get("/GetUserCart", GetUserCart)
router.delete("/deleteCartItem/:id",deleteCartItem)
export default router