import { Router } from "express";
import { register, signin } from "../controllers/authController";
import { handleInputErrors } from "../middlewares/handleInputErrors";
import {
  registerValidation,
  signinValidation,
} from "../validations/authValidations";

const router = Router();

router.post("/register", registerValidation, handleInputErrors, register);
router.post("/signin", signinValidation, handleInputErrors, signin);

export default router;
