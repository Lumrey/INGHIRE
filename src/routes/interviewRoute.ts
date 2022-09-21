import { Router } from "express";

import interviewController from "../controllers/interviewController";
import interviewValidator from "../middlewares/validateReqBody";
import interviewSchemaValidation from "../requestSchemas/interviewValidationSchema";

const router = Router();

router.post(
  "/",
  interviewValidator(interviewSchemaValidation),
  interviewController.addInterview
);
router.get("/", interviewController.fetchInterview);
router.put(
  "/:interviewId",
  interviewValidator(interviewSchemaValidation),
  interviewController.updateInterview
);
router.delete("/:interviewId", interviewController.deleteInterview);
// router.get("/:interviewId", interviewController.fetchOneInterview);
export default router;
