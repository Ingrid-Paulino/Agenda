import express from 'express';
import registerController from '../../app/controllers/registationController';
import loginController from '../../app/controllers/loginController';
import addressController from '../../app/controllers/addressController';
import professionalController from '../../app/controllers/professionalController';
import adminController from '../../app/controllers/adminController';
import specialtiesController from '../../app/controllers/specialtiesController';


const registerRoute = express.Router({ mergeParams: true });
const loginRoute = express.Router({ mergeParams: true });
const addressRoute = express.Router({ mergeParams: true });
const professionalRoute = express.Router({ mergeParams: true });
const specialtiesRoute = express.Router({ mergeParams: true });
const adminRoute = express.Router({ mergeParams: true });


registerRoute.post('/', async (req, res) => {
  const result = await registerController.create(req.body);
  return res.status(201).json(result);
});

registerRoute.get('/', async (_req, res) => {
  const result = await registerController.getAll();
  return res.status(200).json(result);
});

loginRoute.post('/', async (req, res) => {
  const { email, password } = req.body;
  const result = await loginController.login({ email, password });

  return res.status(201).json({token: result});
});

addressRoute.get('/', async (req, res) => {
  const result = await addressController.getAll();
  return res.status(200).json(result);
});

addressRoute.post('/', async (req, res) => {
  const result = await addressController.create(req.body);
  return res.status(201).json(result);
});

professionalRoute.get('/', async (req, res) => {
  const result = await professionalController.getAll();
  return res.status(200).json(result);
});

professionalRoute.post('/', async (req, res) => {
  const result = await professionalController.create(req.body);
  return res.status(201).json(result);
});

adminRoute.get('/', async (req, res) => {
  const result = await adminController.getAll();
  return res.status(200).json(result);
});

adminRoute.post('/', async (req, res) => {
  const result = await adminController.create(req.body);
  return res.status(201).json(result);
});

specialtiesRoute.get('/', async (req, res) => {
  const result = await specialtiesController.getAll();
  return res.status(200).json(result);
});

specialtiesRoute.post('/', async (req, res) => {
  const result = await specialtiesController.create(req.body);
  return res.status(200).json(result);
});

export {
  registerRoute,
  loginRoute,
  addressRoute,
  professionalRoute,
  adminRoute,
  specialtiesRoute
};
