import { DataSource } from "typeorm";
import { User } from "./models/User.model";
import { Answer } from "./models/Answer.model";
import { Question } from "./models/Question.model";
import { ENV } from "./config/env";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: Number(ENV.db_port),
  username: "postgres",
  password: ENV.db_password,
  database: ENV.db_name,
  entities: [User, Answer, Question],
  synchronize: true,
});
