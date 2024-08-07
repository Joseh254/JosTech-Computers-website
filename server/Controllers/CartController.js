import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function AddCart(request, response) {
  try {
    const { productId, quantity } = request.body;
    const userId = request.user.userId; // Access userId from request.user

    // Check if the user already has a cart
    let cart = await prisma.cart.findUnique({
      where: { userId },
    });

    if (!cart) {
      // Create a new cart if one doesn't exist
      cart = await prisma.cart.create({
        data: { userId },
      });
    }

    // Add item to the cart
    await prisma.cartItem.create({
      data: {
        cartId: cart.id,
        productId,
        quantity,
      },
    });

    return response.status(200).json({ success: true, message: "Item added to cart." });

  } catch (error) {
    console.log(error.message);
    return response.status(500).json({ success: false, message: "Internal server error!" });
  }
}





export async function GetUserCart(request, response) {

}


export async function deleteCartItem(request, response) {
  
}
