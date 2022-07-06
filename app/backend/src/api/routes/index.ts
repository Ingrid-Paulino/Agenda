import express from 'express';
import { registerRoute, loginRoute, addressRoute, professionalRoute, adminRoute, specialtiesRoute } from '../routes/routes';

const route = express.Router({ mergeParams: true });


route.use('/register', registerRoute);
route.use('/login', loginRoute);
route.use('/address', addressRoute);
route.use('/professional', professionalRoute);
route.use('/admin', adminRoute);
route.use('/specialtie', specialtiesRoute);



export default route;


