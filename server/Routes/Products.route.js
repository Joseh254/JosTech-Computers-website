import { Router } from "express";
import {

  createProduct,
  getall

} from "../Controllers/ProductsController.js";
const router = Router();

router.post("/create", createProduct);
router.get("/get",getall)

export default router;
