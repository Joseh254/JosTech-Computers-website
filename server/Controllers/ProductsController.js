import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function createProduct (request, response) {
  console.log(request.body);
    try {
      const {productName,productDescription,productPrice} = request.body;
      const newProduct = await prisma.products.create({
       data: {
        productName: productName,
        productPrice: productPrice,
        productDescription:productDescription
       

        }
      })
      response.status(201).json({success:true, message:"product created succesfuly"})
    } catch (error) {
      response.status(500).json({success:false, message:error.message})
    }
  }
//   ***********************************************************************************

export async function getall(request, response) {
  // response.send('getting all products');
  try {
    const products = await prisma.products.findMany();
    response.status(200).json({success:true, data: products})
  } catch (error) {
    response.status(500).json({success:false,message:error.message})
  }
}

//   ***************************************
