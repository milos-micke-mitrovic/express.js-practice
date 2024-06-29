// controllers/productController.ts
import { Request, Response, NextFunction } from "express";
import * as productService from "../services/productService";
import { NotFoundError } from "../errors/CustomError";
import { asyncHandler } from "../middlewares/asyncHandler";

export const getAllProducts = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const products = await productService.getAllProductsService(req.user.id);
    res.status(200).json({ data: products });
  }
);

export const getOneProduct = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const product = await productService.getOneProductService(
      req.params.id,
      req.user.id
    );
    if (!product) throw new NotFoundError("Product not found.");
    res.status(200).json({ data: product });
  }
);

export const createProduct = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const product = await productService.createProductService(
      req.body.name,
      req.user.id
    );
    res.status(201).json({ data: product });
  }
);

export const updateProduct = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const product = await productService.updateProductService(
      req.params.id,
      req.body.name,
      req.user.id
    );
    res.status(200).json({ data: product });
  }
);

export const deleteProduct = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const product = await productService.deleteProductService(
      req.params.id,
      req.user.id
    );
    res.status(200).json({ data: product });
  }
);
