import { Request, Response, NextFunction } from "express";
import { Prisma } from "@prisma/client";
import { CustomError } from "../errors/CustomError";
import { sendErrorResponse } from "../utils/responseUtils";

export const errorHandler = (
  err: CustomError | any,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  console.error(err.stack);

  if (err instanceof CustomError) {
    sendErrorResponse(res, err.statusCode, err.message);
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

    sendErrorResponse(res, statusCode, message);
  } else {
    sendErrorResponse(res, 500, "Something went wrong");
  }
};
