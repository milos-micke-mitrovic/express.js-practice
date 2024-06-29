import { Router } from "express";
import { handleInputErrors } from "../middlewares/handleInputErrors";
import {
  updatePointCreateValidation,
  updatePointUpdateValidation,
} from "../validations/updatePointValidations";
import {
  createUpdatePoint,
  deleteUpdatePoint,
  getAllUpdatePoints,
  getOneUpdatePoint,
  updateUpdatePoint,
} from "../controllers/updatePointController";

const router = Router();

router.get("/update-point/:id", getOneUpdatePoint);
router.get("/update-point/", getAllUpdatePoints);
router.post(
  "/update-point",
  [updatePointCreateValidation, handleInputErrors],
  createUpdatePoint
);
router.put(
  "/update-point/:id",
  [updatePointUpdateValidation, handleInputErrors],
  updateUpdatePoint
);
router.delete("/update-point/:id", deleteUpdatePoint);

export default router;
