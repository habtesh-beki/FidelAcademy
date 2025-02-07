import { Router } from "express";
import { userRouter } from "./user.routes";
import answerRouter from "./answer.routes";
const apiRouter = Router();

apiRouter.use("/user", userRouter);
apiRouter.use("/question");
apiRouter.use("/answers", answerRouter);

export { apiRouter };
