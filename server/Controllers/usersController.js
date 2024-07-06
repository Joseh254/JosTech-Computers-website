import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export async function createuser(request, response) {
    try {
        const { firstName, lastName, email, password } = request.body;

   
        if (!firstName || !lastName || !email || !password) {
            response.status(400).send("Please ensure all fields are included.");
            return;
        }

        const hashedPassword = bcrypt.hashSync(password, 10);

        const newUser = await prisma.jostech_users.create({
            data: {
                firstName,
                lastName,
                email,
                password: hashedPassword,
            },
        });

        response.json(newUser);
    } catch (error) {
        response.status(500).json({ success: false, message: error.message });
    }
}
