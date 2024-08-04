import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function AddCart(request, response) {
  const { userid, productid } = request.body;

  try {
    // Ensure the user exists
    const user = await prisma.jostech_users.findUnique({
      where: { id: userid },
    });

    if (!user) {
      return response.status(404).json({ success: false, message: "User not found" });
    }

    // Ensure the product exists
    const product = await prisma.products.findUnique({
      where: { id: productid },
    });

    if (!product) {
      return response.status(404).json({ success: false, message: "Product not found" });
    }

    // Create a new cart item
    const cartItem = await prisma.cart.create({
      data: {
        user: { connect: { id: userid } },
        product: { connect: { id: productid } },
      },
    });

    return response.status(201).json({ success: true, data: cartItem });
  } catch (error) {
    console.log(error.message);
    return response.status(500).json({ success: false, message: "There was an error adding the item to the cart" });
  }
}
