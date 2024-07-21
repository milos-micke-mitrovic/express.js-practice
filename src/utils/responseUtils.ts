import { Response } from "express";

export const sendSuccessResponse = (
  res: Response,
  statusCode: number,
  data: any,
  message: string = ""
) => {
  res.status(statusCode).json({
    status: "success",
    message,
    data,
  });
};

export const sendErrorResponse = (
  res: Response,
  statusCode: number,
  error: string
) => {
  res.status(statusCode).json({
    status: "error",
    message: error,
  });
};
