// importing joi package for schema validation
import Joi from "joi";
// import { join } from "path";

const   interviewSchemaValidation = Joi.object({
  candidateId: Joi.string().lowercase().required(),
  interviewer: Joi.array().items(Joi.string()).required(),
  hr: Joi.array().items(Joi.string()).required(),
  organizationId: Joi.string().lowercase().required(),
  interviewDate: Joi.date().required(),
  interviewTime: Joi.string().required(),
  isDeleted: Joi.boolean(),
});

export default interviewSchemaValidation;
