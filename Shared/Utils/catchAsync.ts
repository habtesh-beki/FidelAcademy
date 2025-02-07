import { NextFunction, Request, Response } from "express";
import { ServerResponse } from "./ServerResponse";

export const catchAsync = (fn: Function) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      return fn;
    } catch (error: any) {
      ServerResponse.responedWithError(res, error.statusCode ?? 500, error);
    }
  };
};
