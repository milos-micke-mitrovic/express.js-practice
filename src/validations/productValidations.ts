import { body } from "express-validator";

export const createProductValidation = [
  body("name").isString().withMessage("Name must be a string"),
];

export const updateProductValidation = [
  body("name").isString().withMessage("Name must be a string"),
];
