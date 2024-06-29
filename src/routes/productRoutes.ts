import { Router } from "express";
import { handleInputErrors } from "../middlewares/handleInputErrors";
import {
  getOneProduct,
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController";
import {
  createProductValidation,
  updateProductValidation,
} from "../validations/productValidations";

const router = Router();

router.get("/product", getAllProducts);
router.get("/product/:id", getOneProduct);
router.post(
  "/product",
  createProductValidation,
  handleInputErrors,
  createProduct
);
router.put(
  "/product/:id",
  updateProductValidation,
  handleInputErrors,
  updateProduct
);
router.delete("/product/:id", deleteProduct);

export default router;
