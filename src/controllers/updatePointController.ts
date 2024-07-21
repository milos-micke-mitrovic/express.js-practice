import { Request, Response } from "express";
import {
  createUpdatePointService,
  deleteUpdatePointService,
  getAllUpdatePointsService,
  getOneUpdatePointService,
  updateUpdatePointService,
} from "../services/updatePointService";
import { NotFoundError } from "../errors/CustomError";
import { asyncHandler } from "../middlewares/asyncHandler";
import { sendSuccessResponse } from "../utils/responseUtils";

export const getOneUpdatePoint = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const updatePoint = await getOneUpdatePointService(req.params.id);
    if (!updatePoint) {
      throw new NotFoundError("Update point not found.");
    }
    sendSuccessResponse(res, 200, updatePoint);
  }
);

export const getAllUpdatePoints = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const updatePoints = await getAllUpdatePointsService(req.user.id);
    sendSuccessResponse(res, 200, updatePoints);
  }
);

export const createUpdatePoint = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const updatePoint = await createUpdatePointService(req.body);
    sendSuccessResponse(
      res,
      201,
      updatePoint,
      "Update point created successfully."
    );
  }
);

export const updateUpdatePoint = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const updatePoint = await updateUpdatePointService(req.params.id, req.body);
    sendSuccessResponse(
      res,
      200,
      updatePoint,
      "Update point updated successfully."
    );
  }
);

export const deleteUpdatePoint = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    await deleteUpdatePointService(req.params.id);
    sendSuccessResponse(res, 200, null, "Update point deleted successfully.");
  }
);
