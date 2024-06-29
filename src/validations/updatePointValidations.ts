import { body } from "express-validator";

export const updatePointCreateValidation = [
  body("name")
    .exists()
    .withMessage("Name is required")
    .isString()
    .withMessage("Name must be a string"),
  body("description")
    .exists()
    .withMessage("Description is required")
    .isString()
    .withMessage("Description must be a string"),
  body("updateId")
    .exists()
    .withMessage("Update ID is required")
    .isUUID()
    .withMessage("Update ID must be a valid UUID"),
];

export const updatePointUpdateValidation = [
  body("name").optional().isString().withMessage("Name must be a string"),
  body("description")
    .optional()
    .isString()
    .withMessage("Description must be a string"),
];
