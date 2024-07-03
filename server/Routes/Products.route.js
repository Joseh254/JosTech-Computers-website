import { Router} from "express";
import {getallProducts,getSingleProduct,createProduct,deleteProduct,updateProduct} from '../Controllers/ProductsController.js'
const router = Router();

router.get("/Products",getallProducts)

router.get("/products/:id", getSingleProduct)

router.post("/products", createProduct)

router.delete("/products/:id", deleteProduct)

router.patch("/products/:id",updateProduct)

export default router