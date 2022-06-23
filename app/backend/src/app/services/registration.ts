import { IClient, Client } from '../interface';
import RegisterModel from '../models//registration';
import objError from '../utils';

const getAll = async (): Promise<Client[]> => {
  const result = await RegisterModel.getAll();
  return result;
};

const create = async (data: IClient): Promise<Client> => {
  const clientsAll = await getAll();
  const findClient = clientsAll.find((client: IClient) => client.email === data.email);
  if (findClient) throw objError(401, 'Usuário já existente');

  const result = await RegisterModel.create(data);
  return result;
};

export default {
  create,
  getAll
};

