import express from 'express';
import { registerRoute, loginRoute, addressRoute } from '../routes/routes';

const route = express.Router({ mergeParams: true });


route.use('/register', registerRoute);
route.use('/login', loginRoute);
route.use('/address', addressRoute);


export default route;


