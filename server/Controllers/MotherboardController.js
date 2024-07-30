import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createMotherboard(request, response) {
  console.log(request.body);
  try {
    const {
      motherboardName,
      motherboardDescription,
      motherboardPrice,
      motherboardImage,
    } = request.body;
    const motherboardexists = await prisma.motherboards.findFirst({
      where: { motherboardName: motherboardName },
    });
    if (motherboardexists) {
      return response.status(400).json({
        success: false,
        message: "A product with the same name already exists",
      });
    }
    const newProduct = await prisma.motherboards.create({
      data: {
        motherboardName: motherboardName,
        motherboardPrice: motherboardPrice,
        motherboardDescription: motherboardDescription,
        motherboardImage: motherboardImage,
      },
    });
    response
      .status(201)
      .json({ success: true, message: "product created succesfuly" });
  } catch (error) {
    console.log(error.message);
    response.status(500).json({ success: false, message: "An error occured" });
  }
}
//   ***********************************************************************************

export async function getmotherboard(request, response) {
  try {
    const motherboard = await prisma.motherboards.findMany();
    response.status(200).json({ success: true, data: motherboard });
  } catch (error) {
    console.log(error.message);
    response.status(500).json({ success: false, message: "An error occured" });
  }
}

//   ***************************************
