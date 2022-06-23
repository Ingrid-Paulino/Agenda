import { ErrorRequestHandler } from 'express';

export const errorHandlerMiddleware: ErrorRequestHandler = (err, _req, res, _next) => {
  if (err) return res.status(err.status).json({ error: err.message });
  return res.status(500).json({ error: { message: err.message } });
};
