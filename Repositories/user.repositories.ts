import { DataSource } from "typeorm";
import { AppDataSource } from "../DataSource";
import { User } from "../models/User.model";
import { UserI } from "../Entites/userIntity";

export class UserRepository {
  static userRepo = AppDataSource.getRepository(User);
  static repo: UserRepository | null = null;

  private constructor() {}
  public static getRepository() {
    if (!UserRepository.repo) {
      UserRepository.repo = new UserRepository();
    }

    return UserRepository.repo;
  }

  async findUser() {
    const user = await UserRepository.userRepo.find();
    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await UserRepository.userRepo.findOne({ where: { id: id } });
    if (!user) throw new Error("user not found");
    return user;
  }

  async create(data: UserI): Promise<User> {
    const user = UserRepository.userRepo.create(data);
    if (!user) throw new Error("Error occured");
    const newUser = UserRepository.userRepo.save(user);
    if (!newUser) throw new Error("Error occured");
    return newUser;
  }
}
