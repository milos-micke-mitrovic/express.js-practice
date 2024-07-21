import { body } from "express-validator";

export const createProductValidation = [
  body("name")
    .isString()
    .withMessage("Name must be a string")
    .isLength({ max: 255 })
    .withMessage("Name must be at most 255 characters long"),
];

export const updateProductValidation = [
  body("name")
    .isString()
    .withMessage("Name must be a string")
    .isLength({ max: 255 })
    .withMessage("Name must be at most 255 characters long"),
];
