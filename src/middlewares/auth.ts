import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { UnauthorizedError } from "../errors/CustomError";
import { JWT_SECRET } from "../config/config";

export const protect = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const bearer = req.headers.authorization;

  if (!bearer || !bearer.startsWith("Bearer ")) {
    return next(new UnauthorizedError("Not authorized, no token provided"));
  }

  const token = bearer.split(" ")[1];

  if (!token) {
    return next(new UnauthorizedError("Not authorized, invalid token format"));
  }

  try {
    const user = jwt.verify(token, JWT_SECRET) as jwt.JwtPayload;
    req.user = user;
    return next();
  } catch (error) {
    console.error("Token verification failed:", error);
    return next(new UnauthorizedError("Not authorized, invalid token"));
  }
};
