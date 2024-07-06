import { Router } from "express";

import { getallusers,getsingleuser,createuser,updateuser,deleteuser } from "../Controllers/usersController.js";
const router = Router()

router.get("/users", getallusers)
router.get("/:id",getsingleuser)
router.post("/register", createuser)
router.patch("/:id",updateuser)
router.delete("/:id",deleteuser)

export default router