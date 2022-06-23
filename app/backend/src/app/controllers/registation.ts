import { IClient, Client } from '../interface';
import validateSchema from '../schemas';
import RegisterService from '../services/registration';

const getAll = async (): Promise<Client[]> => {
  const result = await RegisterService.getAll();
  return result;
};

const create = async (body: IClient): Promise<Client> => {
  const data = await validateSchema.ClientSchema(body);
  const result = await RegisterService.create(data);
  return result;
};

export default {
  create,
  getAll
};

// TODO Criptografar senha do usuário
// TODO Organizar os status
