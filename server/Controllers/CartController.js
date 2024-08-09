import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function AddCart(request, response) {
  const user = request.user;  // Assuming user is already verified and available from middleware
  const userId = user.id;
  const { productid } = request.body;

  try {
    if (!productid) {
      return response.status(400).json({ success: false, message: "Product ID is required" });
    }

    const cartItem = await prisma.cart.create({
      data: {
        productid: productid,
        userid: userId
      },
    });

    response.status(201).json({ success: true, message: "Product added to cart", cartItem });
  } catch (error) {
    console.log("Error adding product to cart:", error.message);
    response.status(500).json({ success: false, message: "An error occurred while adding the product to the cart" });
  }
}


export async function GetUserCart(request, response) {
  const user = request.user;
  const userId = user.id;

  try {
    const cartItems = await prisma.cart.findMany({
      where: { userid: userId },
      include: { product: true },
    });
    if (cartItems.length > 0) {
      response.status(200).json({ success: true, cartProduct: cartItems });
    } else {
      return response
        .status(404)
        .json({ success: false, message: "Not products Found" });
    }
  } catch (error) {
    console.error("Error fetching cart items:", error.message);
    response
      .status(500)
      .json({
        success: false,
        message: "An error occurred while fetching the cart",
      });
  }
}

export async function deleteCartItem(request, response) {
  const user = request.user;
  const userId = user.id;
  const { id: cartItemId } = request.params;

  try {
    console.log("User ID:", userId);
    console.log("Cart Item ID:", cartItemId);

    if (!cartItemId) {
      return response
        .status(400)
        .json({ success: false, message: "Cart item ID is required" });
    }

    const cartItem = await prisma.cart.findUnique({
      where: { id: cartItemId },
    });

    if (!cartItem || cartItem.userid !== userId) {
      return response
        .status(403)
        .json({
          success: false,
          message: "Unauthorized or cart item not found",
        });
    }

    await prisma.cart.delete({
      where: { id: cartItemId },
    });

    response
      .status(200)
      .json({ success: true, message: "Cart item deleted successfully" });
  } catch (error) {
    console.error("Error deleting cart item:", error.message);
    response
      .status(500)
      .json({
        success: false,
        message: "An error occurred while deleting the cart item",
      });
  }
}
