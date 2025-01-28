import { Request, Response } from "express";
import { UserRepository } from "../Repositories/user.repositories";
import { userRouter } from "../Routes/user.routes";
import { ApiTerminal } from "../utility/apiTerminal";
import { UserI } from "../Entites/userIntity";

export const find = async (req: Request, res: Response) => {
  const userRepo = UserRepository.getRepository();
  const response = await userRepo.findUser();

  ApiTerminal.respondWithSuccess<UserI[]>(res, response, 200);
};

export const findOne = async (req: Request, res: Response) => {
  const userRepo = UserRepository.getRepository();
  const user = await userRepo.findById(req.body.id);

  ApiTerminal.respondWithSuccess<UserI>(res, user, 200);
};

export const create = async (req: Request, res: Response) => {
  const reqBody = req.body;
  const userRepo = UserRepository.getRepository();
  const user = await userRepo.create(reqBody);

  ApiTerminal.respondWithSuccess<UserI>(res, user, 201);
};
