import { Request, Response } from "express";
import { AnswerRepository } from "../Repositories/answer.repositories";
import { ServerResponse } from "../Shared/Utils/ServerResponse";
import { AnswerI } from "../Entites/answerIntity";

export const find = async (req: Request, res: Response) => {
  const answerRepo = AnswerRepository.getRepository();
  const Answer = await answerRepo.getAnswer();

  ServerResponse.responedWithSuccess<AnswerI[]>(res, Answer, 200);
};

export const create = async (req: Request, res: Response) => {
  const answerRepo = AnswerRepository.getRepository();
  const newAnswer = await answerRepo.createAnswer();

  ServerResponse.responedWithSuccess<AnswerI>(res, newAnswer, 201);
};

export const findOne = async (req: Request, res: Response) => {
  const answerRepo = AnswerRepository.getRepository();
  const Answer = await answerRepo.findById(req.body.id);

  ServerResponse.responedWithSuccess<AnswerI>(res, Answer, 200);
};
