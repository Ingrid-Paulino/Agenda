import express from 'express';
import registerController from '../../app/controllers/registation';

const registerRoute = express.Router({ mergeParams: true });


registerRoute.post('/', async (req, res) => {
  const result = await registerController.create(req.body);
  res.status(201).json(result);
});

export {
  registerRoute
};
