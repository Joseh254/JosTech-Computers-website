import { Router } from "express";

import { getallusers,getsingleuser,createuser,updateuser,deleteuser } from "../Controllers/usersController.js";
const router = Router()

router.get("/users", getallusers)
router.get("/users/:id",getsingleuser)
router.post("/users", createuser)
router.patch("/users/:id",updateuser)
router.delete("/users/:id",deleteuser)

export default router