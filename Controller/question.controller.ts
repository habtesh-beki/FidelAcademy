import { Request, Response } from "express";
import { questionRepository } from "../Repositories/question.repositories";
import { ApiTerminal } from "../utility/apiTerminal";
import { QuestionI } from "../Entites/questionIntity";

export const find = async (req: Request, res: Response) => {
  const questionRepo = questionRepository.getRepository();
  const questions = await questionRepo.find();

  ApiTerminal.respondWithSuccess<QuestionI[]>(res, questions, 200);
};
