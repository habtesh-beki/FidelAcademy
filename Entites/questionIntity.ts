import { AnswerI } from "./answerIntity";
import { UserI } from "./userIntity";

export interface QuestionI {
  id: string;
  title: string;
  body: string;
  tags: string;
  image?: string[];
  pdf?: string[];
  author: UserI;
  answer?: AnswerI[];
  createdAt: Date;
  answersCount: number;
}
