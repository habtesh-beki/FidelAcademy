import { DataSource } from "typeorm";
import { User } from "./Models/User.model";
import { Question } from "./Models/Question.model";
import { Answer } from "./Models/Answer.model";

const myDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "test",
  password: "",
  database: "./models/**/*.ts",
  entities: [User, Question, Answer],
});
