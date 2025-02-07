import { Response } from "express";

export class ServerResponse {
  public static responedWithSuccess<T>(
    res: Response,
    data: T,
    statusCode: number
  ) {
    const response = {
      status: "success",
      data: data,
    };
    res.status(statusCode).json(response);
  }

  public static responedWithError(
    res: Response,
    statusCode: number,
    error: AppError
  ) {
    const response = {
      status: "fail",
      message: error.message,
    };

    res.status(statusCode).json(response);
  }
}
