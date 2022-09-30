import { NextFunction, Request, Response } from "express";

import { apiMessage } from "../helpers/error";

export function errorMiddleware(error: any, req: Request, res: Response, next: NextFunction) {
  if (error instanceof Error) {
    return res.status(400).send(apiMessage(false, 400, error.message));
  }

  return next();
}
