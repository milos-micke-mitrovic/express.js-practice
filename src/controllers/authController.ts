import { Request, Response } from "express";
import { createNewUser, signinUser } from "../services/authService";
import { asyncHandler } from "../middlewares/asyncHandler";
import { sendSuccessResponse } from "../utils/responseUtils";

export const register = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { username, password } = req.body;
    const token = await createNewUser(username, password);
    sendSuccessResponse(res, 201, { token }, "User registered successfully");
  }
);

export const signin = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { username, password } = req.body;
    const token = await signinUser(username, password);
    sendSuccessResponse(res, 200, { token }, "User signed in successfully");
  }
);
