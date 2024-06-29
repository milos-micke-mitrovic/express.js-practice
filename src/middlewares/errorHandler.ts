import { Request, Response, NextFunction } from "express";
import { Prisma } from "@prisma/client";
import { CustomError } from "../errors/CustomError";

export const errorHandler = (
  err: CustomError | any,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  console.error(err.stack);

  if (err instanceof CustomError) {
    res.status(err.statusCode).json({ message: err.message });
  } else if (err instanceof Prisma.PrismaClientKnownRequestError) {
    let statusCode = 500;
    let message = "An unexpected error occurred.";

    switch (err.code) {
      case "P2002":
        statusCode = 409;
        message = "Unique constraint failed. The resource already exists.";
        break;
      case "P2003":
        statusCode = 409;
        message = "Foreign key constraint failed.";
        break;
      case "P2025":
        statusCode = 404;
        message = "Resource not found.";
        break;
      default:
        message = err.message;
    }

    res.status(statusCode).json({ status: "error", message });
  } else {
    res.status(500).json({ message: "Something went wrong" });
  }
};
