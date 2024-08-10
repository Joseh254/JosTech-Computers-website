import { Router } from "express";
import { Subscribe ,GetAllSubscribers} from "../Controllers/NewsLetterSubscribersController.js";
const router = Router();


router.post("/Subscribe",Subscribe)
router.get("/GetAllSubscribers",GetAllSubscribers)
export default router