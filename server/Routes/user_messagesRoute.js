import { Router } from "express";
import { writeMessage, readMessages,deleteMessage } from "../Controllers/usersMessages.js";
const router = Router();

router.post("/writeMessages",writeMessage);
router.get("/readMessages", readMessages)
router.delete("/deleteMessage/:id",deleteMessage )
 export default router;