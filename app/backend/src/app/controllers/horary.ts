import { IHorary, Horary } from '../interface';
import validateSchema from '../schemas';
import horary from '../services/horary';

const getAll = async (): Promise<Horary[]> => {
  const result = await horary.getAll();
  return result;
};

const create = async (body: IHorary): Promise<Horary> => {
  console.log('oiiiii2');

  const data = await validateSchema.HorarySchema(body);
  const result = await horary.create(data);
  return result;
};

export default {
  create,
  getAll
};
