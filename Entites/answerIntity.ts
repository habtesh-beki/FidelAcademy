import { UserI } from "./userIntity";

export interface AnswerI {
  id: string;
  body: string;
  image: string;
  pdf: string;
  user: UserI;
  question: string;
  createdAt: Date;
}
