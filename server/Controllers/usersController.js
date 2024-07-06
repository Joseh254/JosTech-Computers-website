import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
export function getallusers(request,response){
    response.send("getting all users")
}

export function getsingleuser(request,response){
response.send("getting a single user")
}

export async function createuser(request,response){
    try {
        const {first_name,last_name,email_address,password }=request.body;
        const newUser = await prisma.jostech_users.create({
            data:{
                first_name:first_name,
                last_name:last_name,
                email_address:email_address,
                password:password

            }
        })
        response.json(newUser)
    } catch (error) {
        response.status(500).json({success:false, message: error.message})
    }
}

export function updateuser(request,response){
    response.send("updating a user")
}

export function deleteuser(request,response){
    response.send("deleting a user")
}