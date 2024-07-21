import { Request, Response } from "express";
import * as updateService from "../services/updateService";
import { NotFoundError } from "../errors/CustomError";
import { asyncHandler } from "../middlewares/asyncHandler";
import { sendSuccessResponse } from "../utils/responseUtils";

export const getOneUpdate = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const update = await updateService.getOneUpdateService(req.params.id);
    if (!update) {
      throw new NotFoundError("Update not found.");
    }
    sendSuccessResponse(res, 200, update);
  }
);

export const getAllUpdates = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const updates = await updateService.getAllUpdatesService(req.user.id);
    sendSuccessResponse(res, 200, updates);
  }
);

export const createUpdate = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const update = await updateService.createUpdateService(req.body);
    sendSuccessResponse(res, 201, update, "Update created successfully.");
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
    sendSuccessResponse(res, 200, update, "Update updated successfully.");
  }
);

export const deleteUpdate = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const update = await updateService.deleteUpdateService(req.params.id);
    if (!update) {
      throw new NotFoundError("Update not found.");
    }
    sendSuccessResponse(res, 200, update, "Update deleted successfully.");
  }
);
