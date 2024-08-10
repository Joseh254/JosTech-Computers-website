import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function Subscribe(request, response) {
    const { email } = request.body; // Extract email from the request body

    try {
        // Check if the email already exists in the newsletter subscribers
        const userWithEmailExist = await prisma.NewsletterSubscribers.findUnique({
            where: { email: email },
        });

        if (userWithEmailExist) {
            return response.status(400).json({
                success: false,
                message: "You are already subscribed to our newsletter",
            });
        }

        // Create a new subscriber
        const NewSubscriber = await prisma.NewsletterSubscribers.create({
            data: { email: email },
        });

        return response.status(200).json({
            success: true,
            message: "You have successfully subscribed to our newsletter",
        });

    } catch (error) {
        console.log(error.message);
        return response.status(500).json({
            success: false,
            message: "Internal server error!",
        });
    }
}
