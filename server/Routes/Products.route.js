import { Router, request, response } from "express";
const router = Router();

router.get("/Products",(request,response)=>{
    response.send("getting all products")
})

router.get("/products/:id",(request,response)=>{
    response.send("getting single product")
})

router.post("/products",(request,response)=>{
    response.send("creating a product")
})
router.delete("/products/:id",(request,response)=>{
    response.send("deleting a product")
})

export default router