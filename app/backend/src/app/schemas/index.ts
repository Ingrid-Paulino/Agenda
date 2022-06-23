import Joi from 'joi';
import { IClient } from '../interface';
import { runSchema } from '../validators';

const ClientSchema = async (value: unknown): Promise<IClient> => {
  const schema = Joi.object<IClient>({
    fullName: Joi.string().min(10).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(16).required(),
    professionalId: Joi.number().required(),
    addressId: Joi.number().required(),
    horaryId: Joi.number().required(),
  });

  const result = await runSchema(schema, value);
  return result;
};


export default {
  ClientSchema
};
