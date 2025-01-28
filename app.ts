import express from "express";
import { initialize } from "./types/typeorm";
import { apiRouter } from "./Routes/index.routes";

const app = express();

initialize();
app.use("/api/v1", apiRouter);
export default app;
