import { AppDataSource } from "../DataSource";
import { AnswerI } from "../Entites/answerIntity";
import { Answer } from "../models/Answer.model";

export class AnswerRepository {
  private static answerRepo = AppDataSource.getRepository(Answer);
  private static repo: AnswerRepository | null = null;

  public static getRepository() {
    if (!AnswerRepository.repo) {
      AnswerRepository.repo = new AnswerRepository();
    }
    return AnswerRepository.repo;
  }

  async getAnswer(): Promise<AnswerI[]> {
    const AllAnswer = await AnswerRepository.answerRepo.find();

    return AllAnswer;
  }

  async createAnswer(): Promise<AnswerI> {
    const newAnswer = AnswerRepository.answerRepo.create();
    const addAnswer = await AnswerRepository.answerRepo.save(newAnswer);

    return addAnswer;
  }

  async findById(id: string): Promise<AnswerI> {
    const oneAnswer = await AnswerRepository.answerRepo.findOne({
      where: { id: id },
    });

    if (!oneAnswer) throw new Error("there is no answer in this id");
    return oneAnswer;
  }
}
