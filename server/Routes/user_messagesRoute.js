import { Router } from "express";
import { writeMessage, readMessages } from "../Controllers/usersMessages.js";
const router = Router();

router.post("/writeMessages",writeMessage);
router.get("/readMessages", readMessages)
 export default router;