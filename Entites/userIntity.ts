import { AnswerI } from "./answerIntity";
import { QuestionI } from "./questionIntity";

export interface UserI {
  id: string;
  first_name: string;
  last_name: string;
  grade: number;
  question?: QuestionI[];
  answer?: AnswerI[];
}
