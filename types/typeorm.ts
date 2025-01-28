import { AppDataSource } from "../DataSource";

const initialize = () =>
  AppDataSource.initialize()
    .then(() => {
      console.log("Database connected");
    })
    .catch((error) => console.log("Database connection error:", error));

export { initialize };
