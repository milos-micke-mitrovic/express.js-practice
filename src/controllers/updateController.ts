import { Request, Response } from "express";
import * as updateService from "../services/updateService";
import { NotFoundError } from "../errors/CustomError";
import { asyncHandler } from "../middlewares/asyncHandler";

export const getOneUpdate = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const update = await updateService.getOneUpdateService(req.params.id);
    if (!update) {
      throw new NotFoundError("Update not found.");
    }
    res.status(200).json({ data: update });
  }
);

export const getAllUpdates = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const updates = await updateService.getAllUpdatesService(req.user.id);
    res.status(200).json({ data: updates });
  }
);

export const createUpdate = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const update = await updateService.createUpdateService(req.body);
    res.status(201).json({ data: update });
  }
);

export const updateUpdate = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const update = await updateService.updateUpdateService(
      req.params.id,
      req.body
    );
    if (!update) {
      throw new NotFoundError("Update not found.");
    }
    res.status(200).json({ data: update });
  }
);

export const deleteUpdate = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const update = await updateService.deleteUpdateService(req.params.id);
    if (!update) {
      throw new NotFoundError("Update not found.");
    }
    res
      .status(200)
      .json({ message: "Update deleted successfully.", data: update });
  }
);
