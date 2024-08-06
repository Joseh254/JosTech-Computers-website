import { Router } from "express";
import { validate } from "../Middleware/usersMiddleware.js";
import {
  createuser,
  loginUser,
  getusers,
  updateUserDetails,
  getOneUser,
} from "../Controllers/usersController.js";
const router = Router();

router.post("/register", validate, createuser);
router.get("/getusers", getusers);
router.patch("/updateUserDetails/:id",updateUserDetails)
router.post("/login", loginUser);
router.get("/getOneUser/:id",getOneUser)

router.post("/motherboard");

export default router;
