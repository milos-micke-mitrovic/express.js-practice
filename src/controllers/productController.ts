import { Request, Response } from "express";
import {
  createProductService,
  updateProductService,
  getAllProductsService,
  getOneProductService,
  deleteProductService,
} from "../services/productService";
import { asyncHandler } from "../middlewares/asyncHandler";
import { sendSuccessResponse } from "../utils/responseUtils";

export const createProduct = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { name } = req.body;
    const product = await createProductService(name, req.user.id);
    sendSuccessResponse(res, 201, product, "Product created successfully");
  }
);

export const updateProduct = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { name } = req.body;
    const product = await updateProductService(
      req.params.id,
      name,
      req.user.id
    );
    sendSuccessResponse(res, 200, product, "Product updated successfully");
  }
);

export const getAllProducts = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const products = await getAllProductsService(req.user.id);
    sendSuccessResponse(res, 200, products);
  }
);

export const getOneProduct = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const product = await getOneProductService(req.params.id, req.user.id);
    sendSuccessResponse(res, 200, product);
  }
);

export const deleteProduct = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    await deleteProductService(req.params.id, req.user.id);
    sendSuccessResponse(res, 200, null, "Product deleted successfully");
  }
);
