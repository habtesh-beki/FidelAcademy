import { Question } from "../models/Question.model";
import { AppDataSource } from "../DataSource";
import { QuestionI } from "../Entites/questionIntity";

export class questionRepository {
  private static questionRepo = AppDataSource.getRepository(Question);
  private static repo: questionRepository | null = null;

  private constructor() {}

  public static getRepository() {
    if (!questionRepository.repo) {
      questionRepository.repo = new questionRepository();
    }
    return questionRepository.repo;
  }

  async find(): Promise<QuestionI[]> {
    const questions = await questionRepository.questionRepo.find();
    if (!questions) throw new Error("error occured");
    return questions;
  }

  async findOne(id: string): Promise<QuestionI> {
    const question = await questionRepository.questionRepo.findOne({
      where: { id: id },
    });
    if (!question) throw new Error("there is no user in this id");
    return question;
  }

  async create(question: QuestionI): Promise<QuestionI> {
    const newQuestion = questionRepository.questionRepo.create(question);
    if (!newQuestion) throw new Error("Error occured");
    const addQuestion = await questionRepository.questionRepo.save(newQuestion);

    return addQuestion;
  }
}
