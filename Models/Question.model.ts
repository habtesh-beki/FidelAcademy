import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { User } from "./User.model";
import { Answer } from "./Answer.model";

@Entity()
export class Question {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  title!: string;

  @Column()
  body!: string;

  @Column()
  tages!: string;

  @Column("simple-array", { nullable: true })
  image?: string[];

  @Column("simple-array", { nullable: true })
  pdf?: string[];

  @ManyToOne(() => User, (user) => user.questions, { eager: true })
  author?: User;

  @OneToMany(() => Answer, (answer) => answer.user)
  answers?: Answer[];

  @CreateDateColumn()
  createdAt!: Date;

  @Column({ type: "int", default: 0 })
  answersCount!: number;
}
