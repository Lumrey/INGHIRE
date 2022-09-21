import { Request, Response } from "express";
import Interview from "../models/interviewModel";

const addInterview = async (req: Request, res: Response) => {
  try {
    const interview = req.body,
      newInterview = await Interview.create(interview);
    if (newInterview)
      return res.status(200).json(`inteview slot created sucessfully!`);
    return res.status(204).json(`Error while creating interview slow`);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const deleteInterview = async (req: Request, res: Response) => {
  const { interviewId } = req.params;
  try {
    const exist = await Interview.findById(interviewId);
    if (exist) {
      const removeInterview = await Interview.findByIdAndDelete(interviewId);
      return res
        .status(200)
        .send(`Interview with ID ${interviewId} is deleted sucessfully`);
    }
    return res
      .status(404)
      .send(`Interview with id ${interviewId} doesn\`t exist.`);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const fetchInterview = async (_req: Request, res: Response) => {
  try {
    const interviews = await Interview.find().select("-_id");
    return res.status(200).json(interviews);
  } catch (error) {
    return res.status(500).json(error);
  }
};

// making the end point for updating the endpoint
const updateInterview = async (req: Request, res: Response) => {
  const { interviewId } = req.params;
  try {
    const exist = await Interview.findById(interviewId);
    if (!exist) {
      return res
        .status(201)
        .send(`Company with ID ${interviewId} doesn't exist`);
    }
    const updateRequest = req.body;
    const updateInterview = await Interview.findByIdAndUpdate(
      interviewId,
      updateRequest
    );
    if (!updateInterview) {
      return res.status(400).json(`Failed to update the company.`);
    }
    return res.status(200).json(`Company updated sucessfully.`);
  } catch (error) {
    return res.status(500).send(`Internal server error.`);
  }
};


export default {
  addInterview,
  deleteInterview,
  updateInterview,
  fetchInterview,
  // fetchOneInterview,
};
