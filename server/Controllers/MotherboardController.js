import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function createMotherboard(request, response) {
  console.log(request.body);
    try {
      const {motherboardName,motherboarDescription,motherboardPrice} = request.body;
      const newProduct = await prisma.motherboards.create({
       data: {
        motherboardName: motherboardName,
        motherboardPrice: motherboardPrice,
        motherboarDescription:motherboarDescription
       

        }
      })
      response.status(201).json({success:true, message:"product created succesfuly"})
    } catch (error) {
      response.status(500).json({success:false, message:error.message})
    }
  }
//   ***********************************************************************************

export async function getmotherboard(request, response) {
  
  try {
    const motherboard = await prisma.motherboards.findMany();
    response.status(200).json({success:true, data: motherboard})
  } catch (error) {
    response.status(500).json({success:false,message:error.message})
  }
}

//   ***************************************
