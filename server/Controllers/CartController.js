import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function AddCart(request, response) {
  const user = request.user;
  const userId = user.id;
  
  try {
    const { productid } = request.body;

    const NewCartItem = await prisma.cart.create({
      data: {
        productid: productid,
        userid: userId,
      },
    });

    response.status(201).json({ success: true, data: NewCartItem });
  } catch (error) {
    console.error(error.message);
    response.status(500).json({ success: false, message: "Internal server error!" });
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
    if(cartItems.length>0){
      response.status(200).json({ success: true, cartProduct: cartItems });
    }
else{
  return response.status(404).json({success:false,message:"Not products Found"})
}
    
  } catch (error) {
    console.error("Error fetching cart items:", error.message);
    response.status(500).json({ success: false, message: "An error occurred while fetching the cart" });
  }
}


  export async function deleteCartItem(request, response) {
    const user = request.user;
    console.log(user);
    
    response.json({user})
    // const { id } = request.params;


    // const productExistInTheCart = await prisma.cart.findFirst({where:{id:id}})
    // if(!productExistInTheCart){
    //   return response.status(404).json({success:false,message:"Product Not Found "})
    // }
    // try {
    //   await prisma.cart.delete({
    //     where:{id: id}
    //   })
    //   response.status(204).json({success:true, message:"product removed from cart"})
    // } catch (error) {
    //   console.log(error.message);
    //   return response.status(404).json({success:false, message:" cart Product not found"})
    // }
  }
