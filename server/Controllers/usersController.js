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
    // Find the user by email
    const user = await prisma.jostech_users.findFirst({
      where: { email },
    });

    // Check if the user exists
    if (!user) {
      return response
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    // Compare the provided password with the hashed password
    const passwordMatch = bcrypt.compareSync(password, user.password);

    if (!passwordMatch) {
      return response
        .status(401)
        .json({ success: false, message: "Wrong email or password" });
    }

    // Create JWT payload
    const payload = {
      id: user.id,
      role: user.role,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    };

    // Sign the token
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '100h',
    });

    // Set the token in an HTTP-only cookie
    response.cookie('access_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === true, // Set to true in production
      sameSite: 'Strict', // Adjust as needed
    });

    response.status(200).json({ success: true, data: payload });
  } catch (error) {
    console.error(error.message);
    response.status(500).json({ success: false, message: "Internal server error" });
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



export async function updateUserDetails(request, response) {
  const { firstName, lastName, email, role, password, profilePicture } = request.body;
  const { id } = request.params;

  try {
    const user = await prisma.jostech_users.findUnique({ where: { id: id } });
    if (!user) {
      return response.status(400).json({ success: false, message: "User not found" });
    }

    const updatedUser = await prisma.jostech_users.update({
      where: { id: id },
      data: {
        firstName: firstName || user.firstName,
        lastName: lastName || user.lastName,
        email: email || user.email,
        role: role || user.role,
        password: password || user.password,
        profilePicture: profilePicture || user.profilePicture,
      },
      select: {
        firstName: true,
        lastName: true,
        email: true,
        profilePicture: true,
        role: true,
      },
    });

    return response.status(200).json({ success: true, message: "User updated successfully", data: updatedUser });

  } catch (error) {
    console.log(error.message);
    return response.status(500).json({ success: false, message: "Internal server error!" });
  }
}

export async function getOneUser(request, response){
  const {id} = request.params
  try {
    const user = await prisma.jostech_users.findUnique({
      where:{id:id},
      select: {
        firstName: true,
        lastName: true,
        email: true,
        profilePicture: true,
        role: true,
      },
    })
    if(!user){
      return response.status(404).json({success:false, message:"User not found"})
    }
    return response.status(200).json({success:true, data:user})
    
  } catch (error) {
    console.log(error.message);
    return response.status(500).json({success:false, message:"Internal server error!"})
    
  }
}