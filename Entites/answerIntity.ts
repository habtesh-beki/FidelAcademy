import { Question } from "../models/Question.model";
import { UserI } from "./userIntity";

export interface AnswerI {
  id: string;
  body: string;
  image?: string[];
  pdf?: string[];
  user?: UserI;
  question?: Question;
  createdAt: Date;
  updatedAt?: Date;
}
