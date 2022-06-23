import express from 'express';
import registerController from '../../app/controllers/registation';

const registerRoute = express.Router({ mergeParams: true });


registerRoute.post('/', async (req, res) => {
  const result = await registerController.create(req.body);
  return res.status(201).json(result);
});

registerRoute.get('/', async (_req, res) => {
  const result = await registerController.getAll();
  return res.status(201).json(result);
});

export {
  registerRoute
};
