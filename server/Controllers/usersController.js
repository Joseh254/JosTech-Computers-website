import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export async function createuser(request, response) {
  try {
    const { firstName, lastName, email, password, role,profilePicture } = request.body;

    const hashedPassword = bcrypt.hashSync(password, 10);

    const newUser = await prisma.jostech_users.create({
      data: {
        firstName,
        lastName,
        email,
        password: hashedPassword,
        role,
        profilePicture,
      },
    });

    response.status(201).json({ success: true, data: newUser });
  } catch (error) {
    console.log(error.message);
    response
      .status(500)
      .json({ success: false, message: "An error occurred in the server" });
  }
}
export async function loginUser(request, response) {
  const { email, password } = request.body;

  try {
    const user = await prisma.jostech_users.findFirst({
      where: { email },
    });

    if (!user) {
      return response
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const passwordMatch = bcrypt.compareSync(password, user.password);

    if (!passwordMatch) {
      return response
        .status(401)
        .json({ success: false, message: "Wrong email or password" });
    }

    const payload = {
      id: user.id,
      role: user.role,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "100h",
    });

    response.cookie("access_token", token, { httpOnly: true });

    response.status(200).json({ success: true, data: payload });
  } catch (error) {
    console.log(error.message);
    response.status(500).json({ success: false, message: "user not found" });
  }
}

export async function getusers(request, response){
try {
  const users= await prisma.jostech_users.findMany({
    select:{
      firstName:true,
      lastName:true,
      email:true,
      role:true,
      createdAt:true,
      
    }
  })
  if(!users){
return response.status(404).json({success:false, message:"Users Not Found"})
  }
  return response.status(200).json({success:true, data:users})
} catch (error) {
  console.log(error.message);
  return response.status(404).json({success:false, message:"There was an error getting users"})
}
}

export async function updateUserDetails(request, response){
  response.send("uodating user informationinsom")
}