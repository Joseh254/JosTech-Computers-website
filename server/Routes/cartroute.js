import { Router } from "express";
import {
  AddCart,
  GetUserCart,
  deleteCartItem,
  updateCart,
  deleteAll,
} from "../Controllers/CartController.js";
import { verifyToken } from "../Middleware/VerifyToken.js";
const router = Router();
router.post("/AddCart", verifyToken, AddCart);
router.get("/GetUserCart", verifyToken, GetUserCart);
router.delete("/deleteCartItem/:id", verifyToken, deleteCartItem);
router.put('/updateCart/:id', verifyToken, updateCart);
router.post('/clearCart', verifyToken, deleteAll)

export default router; 
