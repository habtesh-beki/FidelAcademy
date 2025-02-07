import { Router } from "express";
import { findOne, create, find } from "../Controller/User.controller";

const userRouter = Router();

userRouter.route("/").get(find).post(create);
userRouter.route("/:id").get(findOne);

export { userRouter };
