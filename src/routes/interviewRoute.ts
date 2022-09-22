import { Router } from "express";

import interviewController from "../controllers/interviewController";
import interviewValidator from "../middlewares/validateReqBody";
import validator from "../requestSchemas/interviewValidationSchema";

const router = Router();

router.post(
  "/",
  interviewValidator(validator.interviewSchemaValidation),
  interviewController.addInterview
);

router.get("/", interviewController.fetchInterview);

router.put(
  "/:interviewId",
  interviewValidator(validator.updateInterviewSchemaValidation),
  interviewController.updateInterview
);
router.delete("/:interviewId", interviewController.deleteInterview);

router.get("/:interviewId", interviewController.fetchOneInterview);
export default router;
