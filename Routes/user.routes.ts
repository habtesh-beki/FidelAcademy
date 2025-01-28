import { Router } from "express";
import { findOne, create } from "../Controller/User.controller";

const userRouter = Router();

userRouter.route("/").get(findOne).post(create);

export { userRouter };
