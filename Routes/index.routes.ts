import { Router } from "express";
import { userRouter } from "./user.routes";
const apiRouter = Router();

apiRouter.use("/user", userRouter);
// apiRouter.use("/question");
// apiRouter.use("/answers");

export { apiRouter };
