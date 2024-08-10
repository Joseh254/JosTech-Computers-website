import { Router } from "express";
import { Subscribe } from "../Controllers/NewsLetterSubscribersController.js";
const router = Router();


router.post("/Subscribe",Subscribe)
export default router