import express from 'express';
import 'express-async-errors';
import bodyParser from 'body-parser';
import routes from '../api/routes';
import { errorHandlerMiddleware } from './middlewares/errorHandlerMiddleware';
import helmet from "helmet";
import morgan from "morgan";

const api = express();
// parse application/x-www-form-urlencoded
api.use(bodyParser.urlencoded({ extended: false }))
api.use(express.json());
api.use(helmet()); //para segurança
api.use(morgan("common"));

api.use(express.json());
api.use(bodyParser.json());

api.get('/', (_req, res) => {
  res.send('Começando projeto');
});

api.use(routes);

api.use(errorHandlerMiddleware);


export default api;


// stub __ > mocka so uma parento spy ->

//   beforeEach(() => {
//     sinon.restore()
//   } )
