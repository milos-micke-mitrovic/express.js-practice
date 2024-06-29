import { Router } from "express";
import { handleInputErrors } from "../middlewares/handleInputErrors";
import { checkProductExists } from "../middlewares/checkProductExists";
import {
  updateCreateValidation,
  updateUpdateValidation,
} from "../validations/updateValidations";
import {
  createUpdate,
  deleteUpdate,
  getAllUpdates,
  getOneUpdate,
  updateUpdate,
} from "../controllers/updateController";

const router = Router();

router.get("/update/:id", getOneUpdate);
router.get("/update", getAllUpdates);
router.post(
  "/update",
  [updateCreateValidation, handleInputErrors, checkProductExists],
  createUpdate
);
router.put(
  "/update/:id",
  [updateUpdateValidation, handleInputErrors, checkProductExists],
  updateUpdate
);
router.delete("/update/:id", checkProductExists, deleteUpdate);

export default router;
