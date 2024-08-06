import { PrismaClient } from "@prisma/client";
import jwt from 'jsonwebtoken';
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



export async function deleteCartItem(request, response) {
  const { id } = request.params;
  const authHeader = request.headers.authorization;

  // Check if the Authorization header is present
  if (!authHeader) {
    return response.status(401).json({ message: "Unauthorized. No token provided." });
  }

  // Extract token from possible formats
  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : authHeader;

  try {
    // Verify the token using the secret key from environment variables
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET); // Ensure JWT_SECRET is set in .env
    const userId = decodedToken.id;

    // Find the cart item and check ownership
    const cartItem = await prisma.cart.findUnique({
      where: { id: id }
    });

    if (!cartItem) {
      return response.status(404).json({ message: "Cart item not found." });
    }

    if (cartItem.userId !== userId) {
      return response.status(403).json({ message: "Forbidden. You do not own this cart item." });
    }

    // Delete the cart item
    await prisma.cart.delete({
      where: { id: id }
    });

    return response.status(200).json({ message: "Cart item deleted successfully." });
  } catch (error) {
    console.error(error.message);
    return response.status(500).json({ message: "An error occurred while deleting the cart item." });
  }
}