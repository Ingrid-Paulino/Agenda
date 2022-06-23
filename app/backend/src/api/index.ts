import express from 'express';
import 'express-async-errors';
import bodyParser from 'body-parser';
import routes from '../api/routes';
import { errorHandlerMiddleware } from './middlewares/errorHandlerMiddleware';

const api = express();

api.use(express.json());
api.use(bodyParser.json());

api.get('/', (_req, res) => {
  res.send('Começando projeto');
});

api.use(routes);

api.use(errorHandlerMiddleware);


export default api;
