import { Request, Response, NextFunction } from "express";
import {
  createUpdatePointService,
  deleteUpdatePointService,
  getAllUpdatePointsService,
  getOneUpdatePointService,
  updateUpdatePointService,
} from "../services/updatePointService";
import { NotFoundError, InternalServerError } from "../errors/CustomError";
import { asyncHandler } from "../middlewares/asyncHandler";

export const getOneUpdatePoint = asyncHandler(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const updatePoint = await getOneUpdatePointService(req.params.id);

    if (!updatePoint) {
      throw new NotFoundError("Update point not found.");
    }

    res.status(200).json({ data: updatePoint });
  }
);

export const getAllUpdatePoints = asyncHandler(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const updatePoints = await getAllUpdatePointsService(req.user.id);
    res.status(200).json({ data: updatePoints });
  }
);

export const createUpdatePoint = asyncHandler(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const updatePoint = await createUpdatePointService(req.body);
    res.status(201).json({ data: updatePoint });
  }
);

export const updateUpdatePoint = asyncHandler(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const updatePoint = await updateUpdatePointService(req.params.id, req.body);
    res.status(200).json({ data: updatePoint });
  }
);

export const deleteUpdatePoint = asyncHandler(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    await deleteUpdatePointService(req.params.id);
    res.status(200).json({ message: "Update point deleted successfully." });
  }
);
