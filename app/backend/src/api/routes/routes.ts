import express from 'express';
import registerController from '../../app/controllers/registationController';
import loginController from '../../app/controllers/loginController';
// import rescue from 'express-rescue';

const registerRoute = express.Router({ mergeParams: true });
const loginRoute = express.Router({ mergeParams: true });


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

export {
  registerRoute,
  loginRoute
};
