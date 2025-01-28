import { configDotenv } from "dotenv";
configDotenv();

export const ENV = {
  port: process.env.PORT,
  db_port: process.env.DB_PORT,
  db_password: process.env.DB_PASSWORD,
  db_name: process.env.DATABASE_NAME,
};
