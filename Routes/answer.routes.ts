import { Router } from "express";
import { create, find, findOne } from "../Controller/answer.controller";

const answerRouter = Router();

answerRouter.route("/").get(find).post(create);
answerRouter.route("/:id").get(findOne);

export default answerRouter;
