import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Question } from "./Question.model";
import { Answer } from "./Answer.model";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  first_name!: string;

  @Column()
  last_name!: string;

  @Column()
  grade!: number;

  @OneToMany(() => Question, (question) => question.author)
  questions?: Question[];

  @OneToMany(() => Answer, (answer) => answer.user)
  answers?: Answer[];
}
