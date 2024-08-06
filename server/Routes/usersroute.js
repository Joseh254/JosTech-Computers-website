import { Router } from "express";
import { validate } from "../Middleware/usersMiddleware.js";
import {
  createuser,
  loginUser,
  getusers,
  updateUserDetails,
} from "../Controllers/usersController.js";
const router = Router();

router.post("/register", validate, createuser);
router.get("/getusers", getusers);
router.patch("/updateUserDetails/:id",updateUserDetails)
router.post("/login", loginUser);

router.post("/motherboard");

export default router;
