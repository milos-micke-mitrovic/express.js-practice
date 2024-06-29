import { body } from "express-validator";

export const updateCreateValidation = [
  body("title")
    .exists()
    .isString()
    .withMessage("Title is required and should be a string"),
  body("body")
    .exists()
    .isString()
    .withMessage("Body is required and should be a string"),
  body("productId")
    .exists()
    .isString()
    .withMessage("Product ID is required and should be a string"),
];

export const updateUpdateValidation = [
  body("title").optional().isString().withMessage("Title should be a string"),
  body("body").optional().isString().withMessage("Body should be a string"),
  body("status")
    .optional()
    .isIn(["IN_PROGRESS", "SHIPPED", "DEPRECATED"])
    .withMessage(
      "Status must be one of 'IN_PROGRESS', 'SHIPPED', 'DEPRECATED'"
    ),
  body("version")
    .optional()
    .isString()
    .withMessage("Version should be a string"),
];
