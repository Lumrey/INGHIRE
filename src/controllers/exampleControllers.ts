import { Request, Response } from "express";
import { IExample } from "../models/exampleModel";
import { getExample } from "../services/exampleService";

export const getExampleHandler = async (
  _req: Request,
  res: Response
): Promise<Response<IExample>> => {
  const examples = await getExample();
  return res.status(200).send(examples);
};
