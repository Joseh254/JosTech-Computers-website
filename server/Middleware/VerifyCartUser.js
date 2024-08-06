import jwt from 'jsonwebtoken';

export function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Unauthorized. No token provided." });
  }

  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : authHeader;

  try {
    // Verify the token using the secret key
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    // Attach the decoded token to the request object
    req.user = decodedToken;
    next();
  } catch (error) {
    console.error("Token verification failed:", error.message);
    return res.status(401).json({ message: "Invalid token." });
  }
}
