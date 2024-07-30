import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function writeMessage(request, response) {
    try {
      const { first_name, last_name, email, location,phone_number,subject,message } = request.body;
      const newMessage = await prisma.user_messages.create({
        data: {
          first_name,
          last_name,
          email,
          location,
          phone_number,
          subject,
          message
        },
      });
  
      response
        .status(201)
        .json({ success: true,message:"Message sent", data:newMessage });
    } catch (error) {
      console.log(error.message);
      response
        .status(500)
        .json({ success: false, message: "An error occurred in the server" });
    }
  }