import { Router } from "express";
import {

  createProduct,
  getall,
 
  

} from "../Controllers/ProductsController.js";

import { createMotherboard ,getmotherboard } from "../Controllers/MotherboardController.js";
const router = Router();

router.post("/create", createProduct);
router.get("/get",getall)
router.post("/motherboard" ,createMotherboard)
router.get("/getmotherboard", getmotherboard)

export default router;
