import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createdesktop(request, response) {
  console.log(request.body);
  try {
    const { desktopName, desktopDescription, desktopPrice, desktopImage } =
      request.body;
    const existingdesktop = await prisma.desktops.findFirst({
      where: { desktopName: desktopName },
    });
    if (existingdesktop) {
      return response.status(400).json({
        success: false,
        message: "product with the same name already exists",
      });
    }
    const newProduct = await prisma.desktops.create({
      data: {
        desktopName: desktopName,
        desktopPrice: desktopPrice,
        desktopDescription: desktopDescription,
        desktopImage: desktopImage,
      },
    });

    response
      .status(201)
      .json({ success: true, message: "product created succesfuly" });
  } catch (error) {
    response
      .status(500)
      .json({ success: false, message: "An error has occured" });
    console.log(error.message);
  }
}
//   ***********************************************************************************

export async function getdesktop(request, response) {
  try {
    const desktop = await prisma.desktops.findMany();
    response.status(200).json({ success: true, data: desktop });
  } catch (error) {
    response.status(500).json({ success: false, message: error.message });
  }
}

//   ***************************************
