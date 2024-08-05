import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Function to add an item to the cart
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
        userid: userid,
        productid: productid,
      },
    });

    return response.status(201).json({ success: true, data: cartItem });
  } catch (error) {
    console.log(error.message);
    return response.status(500).json({ success: false, message: "There was an error adding the item to the cart" });
  }
}

// Function to get cart items for a user
export async function GetUserCart(request, response) {
  const { id } = request.params;
  try {
    const user = await prisma.jostech_users.findUnique({
      where: { id: id }
    });

    if (!user) {
      return response.status(404).json({ success: false, message: "Unauthorized" });
    }

    const cartItems = await prisma.cart.findMany({
      where: { userid: id },
      include: {
        product: true,
      },
    });

    return response.status(200).json({ success: true, data: cartItems });
  } catch (error) {
    console.log(error.message);
    return response.status(500).json({ success: false, message: "There was an error fetching the cart items" });
  }
}
