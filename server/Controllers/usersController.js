import { PrismaClient } from "@prisma/client"
import bcrypt from 'bcrypt'

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
        const hashedPassword = bcrypt.hashSync(password, 10)
        const newUser = await prisma.jostech_users.create({
            data:{
                first_name:first_name,
                last_name:last_name,
                email_address:email_address,
                password:hashedPassword

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