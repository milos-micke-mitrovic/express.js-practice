import { body } from "express-validator";

export const registerValidation = [
  body("username").isString().notEmpty(),
  body("password").isString().notEmpty(),
];

export const signinValidation = [
  body("username").isString().notEmpty(),
  body("password").isString().notEmpty(),
];
