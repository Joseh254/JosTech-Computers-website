import { Router } from "express";
import {
  createProduct,
  getall,
  deleteProduct,
  UpdateProduct,
  getOneProduct,
} from "../Controllers/ProductsController.js";

import {
  createMotherboard,
  getmotherboard,
} from "../Controllers/MotherboardController.js";
import { createdesktop, getdesktop } from "../Controllers/DesktopController.js";
const router = Router();

router.post("/create", createProduct);
router.patch("/UpdateProduct/:id",UpdateProduct)
router.get("/getOneProduct/:id",getOneProduct)
router.delete("/delete/:id", deleteProduct);
router.get("/get", getall);
router.post("/motherboard", createMotherboard);
router.get("/getmotherboard", getmotherboard);
router.post("/createdesktop", createdesktop);
router.get("/getdesktop", getdesktop);

export default router;
