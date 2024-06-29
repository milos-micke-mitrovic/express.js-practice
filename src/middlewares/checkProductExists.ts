import { Request, Response, NextFunction } from "express";
import { getOneProductService } from "../services/productService";
import { NotFoundError, InternalServerError } from "../errors/CustomError";

export const checkProductExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const product = await getOneProductService(req.body.productId, req.user.id);
    if (!product) {
      throw new NotFoundError("Product not found.");
    }
    next();
  } catch (error) {
    next(
      new InternalServerError("An error occurred while checking the product.")
    );
  }
};
