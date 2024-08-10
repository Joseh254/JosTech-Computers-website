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

    // Delete the cart item
    await prisma.cart.delete({
      where: { id: cartItemId },
    });

    // Fetch the updated list of cart items
    const cartItems = await prisma.cart.findMany({
      where: { userid: userId },
      include: { product: true },
    });

    // Send the updated cart items in the response
    response
      .status(200)
      .json({
        success: true,
        message: "Cart item deleted successfully",
        data: cartItems, // Include updated cart items
      });
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

export async function updateCart(request, response) {
  const { id } = request.params; // Get the cart item ID from the route parameters
  const { quantity } = request.body; // Get the new quantity from the request body
  const cartItem = await prisma.cart.findUnique({
    where: { id: 'ce5f33cc-cee2-4c66-903c-ce12251a942c' },
  });
 
  
  


  // Validate input
  if (typeof quantity !== 'number' || quantity <= 0) {
    return response.status(400).json({ message: 'Invalid quantity' });
  }

  try {
    // Check if the cart item exists
    const existingCartItem = await prisma.cart.findUnique({
      where: { id: id },
    });

    if (!existingCartItem) {
      return response.status(404).json({ message: 'Cart item not found' });
    }

    // Update the cart item
    const updatedCartItem = await prisma.cart.update({
      where: { id: id },
      data: { quantity: quantity }
    });

    // Return success response
    response.status(200).json({ success: true, cartItem: updatedCartItem });
  } catch (error) {
    // Handle errors and return a failure response
    console.log('Error updating cart item:', error);
    response.status(500).json({ message: 'Failed to update cart item' });
  }
}
