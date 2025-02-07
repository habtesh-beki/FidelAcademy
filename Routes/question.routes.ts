import { Router } from "express";
import { find } from "../Controller/question.controller";

const questionRoute = Router();

questionRoute.route("/").get(find).post();
