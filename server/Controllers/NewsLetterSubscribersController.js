import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function Subscribe(request, response){
    response.send("subscribing to newsletter")
}