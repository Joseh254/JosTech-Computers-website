import { Router } from "express";
import { writeMessage } from "../Controllers/usersMessages.js";
const router = Router();

router.post("/messages",writeMessage);
 export default router;