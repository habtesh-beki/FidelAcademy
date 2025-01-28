import { ServerSeccussResponse } from "../types/app";
import { Response } from "express";

export class ApiTerminal {
  static respondWithSuccess<T>(res: Response, data: T, statusCode: number) {
    const response: ServerSeccussResponse<T> = {
      status: "success",
      data: data,
    };

    res.status(statusCode).json(response);
  }
}
