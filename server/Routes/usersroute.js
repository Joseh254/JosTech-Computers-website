import { Router } from "express";

import { createuser} from "../Controllers/usersController.js";
const router = Router()


router.post("/register", createuser)


export default router