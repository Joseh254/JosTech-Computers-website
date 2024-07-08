import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function createdesktop(request, response) {
  console.log(request.body);
    try {
      const {desktopName, desktopDescription, desktopPrice} = request.body;
      const newProduct = await prisma.desktops.create({
       data: {
        desktopName: desktopName,
        desktopPrice: desktopPrice,
        desktopDescription:desktopDescription
       

        }
      })
      response.status(201).json({success:true, message:"product created succesfuly"})
    } catch (error) {
      response.status(500).json({success:false, message:error.message})
    }
  }
//   ***********************************************************************************

export async function getdesktop(request, response) {
  
  try {
    const desktop = await prisma.desktops.findMany();
    response.status(200).json({success:true, data: desktop})
  } catch (error) {
    response.status(500).json({success:false,message:error.message})
  }
}

//   ***************************************
