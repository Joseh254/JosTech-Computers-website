import { Router } from "express";
import { validate } from "../Middleware/usersMiddleware.js";
import { createuser} from "../Controllers/usersController.js";
const router = Router()


router.post("/register", validate, createuser)


export default router