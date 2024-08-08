import jwt from 'jsonwebtoken';

export function verifyToken(request, response, next) {
  const token = request.cookies.access_token;

  if (!token) {
    return response.status(401).json({ message: "Unauthorized. No token provided." });
  }

  jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
    if (error) {
      console.log(error.message);
      console.error(error); 
      
      return response.status(500).json({ success: false, message: "Unauthorized" });
    }
    request.user = decoded;
    console.log(decoded);
     
    next();
  });
 
}
