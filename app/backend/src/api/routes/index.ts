import express from 'express';
import { registerRoute, loginRoute } from '../routes/routes';

const route = express.Router({ mergeParams: true });


route.use('/register', registerRoute);
route.use('/login', loginRoute);

export default route;


