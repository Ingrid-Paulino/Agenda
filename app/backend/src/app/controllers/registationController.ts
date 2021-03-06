import { IClient, Clientt } from '../interface';
import validateSchema from '../schemas';
import RegisterService from '../services/registrationServices';

const getAll = async (): Promise<Clientt[]> => {
  const result = await RegisterService.getAll();
  return result;
};

const create = async (body: IClient): Promise<Clientt> => {
  const data = await validateSchema.ClientSchema(body);
  const result = await RegisterService.create(data);
  return result;
};

export default {
  create,
  getAll
};
