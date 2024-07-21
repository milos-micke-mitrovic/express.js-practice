import { validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";
import { BadRequestError } from "../errors/CustomError";

export const handleInputErrors = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors
      .array()
      .map((err) => err.msg)
      .join(", ");
    throw new BadRequestError(errorMessages);
  }
  next();
};
