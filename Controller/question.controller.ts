import { Request, Response } from "express";
import { questionRepository } from "../Repositories/question.repositories";
import { ApiTerminal } from "../utility/apiTerminal";
import { QuestionI } from "../Entites/questionIntity";
import { ServerResponse } from "../Shared/Utils/ServerResponse";
import { QueryExpressionMap } from "typeorm/query-builder/QueryExpressionMap";

export const find = async (req: Request, res: Response) => {
  const questionRepo = questionRepository.getRepository();
  const questions = await questionRepo.find();

  ApiTerminal.respondWithSuccess<QuestionI[]>(res, questions, 200);
};

export const findOne = async (req: Request, res: Response) => {
  const questionRepo = questionRepository.getRepository();
  const question = await questionRepo.findOne(req.body.id);

  ServerResponse.responedWithSuccess<QuestionI>(res, question, 200);
};

export const create = async (req: Request, res: Response) => {
  const questionRepo = questionRepository.getRepository();
  const question = await questionRepo.create(req.body);

  ServerResponse.responedWithSuccess<QuestionI>(res, question, 201);
};
