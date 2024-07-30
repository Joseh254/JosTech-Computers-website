import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function writeMessage(request, response) {
  try {
    const {
      first_name,
      last_name,
      email,
      location,
      phone_number,
      subject,
      message,
    } = request.body;
    const newMessage = await prisma.user_messages.create({
      data: {
        first_name,
        last_name,
        email,
        location,
        phone_number,
        subject,
        message,
      },
    });

    response
      .status(201)
      .json({ success: true, message: "Message sent", data: newMessage });
  } catch (error) {
    console.log(error.message);
    response
      .status(500)
      .json({ success: false, message: "An error occurred in the server" });
  }
}

export async function readMessages(request, response) {
  try {
    const messages = await prisma.user_messages.findMany();
    return response.status(200).json({ success: true, data: messages });
  } catch (error) {
    console.log(error.message);
    return response.status(404).json({
      success: false,
      message: "An error occured when getting messages",
    });
  }
}

export async function deleteMessage(request, response) {
  try {
    const { id } = request.params;
    await prisma.user_messages.delete({
      where: { id: id },
    });
    response.status(201).json({ success: true, message: "message deleted" });
  } catch (error) {
    console.log(error.message);
    return response
      .status(400)
      .json({ success: false, message: "there was an error deleting message" });
  }
}
