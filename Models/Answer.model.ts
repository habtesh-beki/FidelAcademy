import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./User.model";
import { Question } from "./Question.model";

@Entity()
export class Answer {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column("text")
  body!: string;

  @Column("simple-array", { nullable: true })
  image?: string[];

  @Column("simple-array", { nullable: true })
  pdf?: string[];

  @ManyToOne(() => User, (user) => user.answers)
  user?: User;

  @ManyToOne(() => Question, (question) => question.answers)
  question?: Question;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt?: Date;
}
