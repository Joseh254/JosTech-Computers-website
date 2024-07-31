import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createProduct(request, response) {
  try {
    const {
      productName,
      productDescription,
      productPrice,
      productImage,
      productsRemaining,
    } = request.body;
    const productexists = await prisma.products.findFirst({
      where: { productName: productName },
    });
    if (productexists) {
      return response.status(400).json({
        success: false,
        message: "A product with the same name alredy exists",
      });
    }
    const newProduct = await prisma.products.create({
      data: {
        productName: productName,
        productPrice: productPrice,
        productDescription: productDescription,
        productImage: productImage,
        productsRemaining: productsRemaining,
      },
    });
    response
      .status(201)
      .json({ success: true, message: "product created succesfuly" });
  } catch (error) {
    console.log(error.message);
    response
      .status(500)
      .json({ success: false, message: "An error has occured" });
  }
}
//   ***********************************************************************************

export async function getall(request, response) {
  try {
    const products = await prisma.products.findMany();
    response.status(200).json({ success: true, data: products });
  } catch (error) {
    console.log(error.message);
    response.status(500).json({ success: false, message: "An error occured" });
  }
}

//   ***************************************
export async function deleteProduct(request, response) {
  try {
    const { id } = request.params;
    const product = await prisma.products.findFirst({
      where: { id: id },
    });

    if (!product) {
      return response.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
    const deletedProduct = await prisma.products.delete({
      where: { id: id },
    });
    return response.status(200).json({
      success: true,
      message: "Product deleted",
      data: deletedProduct,
    });
  } catch (error) {
    console.log(error.message);
    return response.status(400).json({
      success: false,
      message: "Something went wrong when deleting the product",
    });
  }
}
