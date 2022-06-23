import { IClient, Client } from '../interface';
import { ClientDAO } from '../../db/db_sequelize';
import RegisterModel from '../models/model';
import objError from '../utils';
import { MSG, StatusCodes } from '../enum/enumStatusAndMessage';

const getAll = async (): Promise<Client[]> => {
  const result = await RegisterModel.getAll(ClientDAO);
  return result;
};

const create = async (data: IClient): Promise<Client> => {
  const clientsAll = await getAll();

  const findClient = clientsAll.find((client: IClient) => client.email === data.email);
  if (findClient) throw objError(StatusCodes.CONFLICT, MSG.EXISTING_USER);
  const result = await RegisterModel.create(data, ClientDAO);

  return result;
};

export default {
  create,
  getAll
};

