import bcrypt from 'bcryptjs';
import { ClientDAO } from '../../db/db_sequelize';
import { MSG, StatusCodes } from '../enum/enumStatusAndMessage';
import entryMsgStatusError from '../helpers/entryMsgStatusError';
import { Client, IClient } from '../interface';
import Model from '../models/model';
import descriptografia from '../utils/descriptografia';


const getAll = async (): Promise<Client[]> => {
  const result = await Model.getAll<Client>(ClientDAO);
  if (!result) throw entryMsgStatusError(StatusCodes.OK, '[]');
  return result;
};

const create = async (data: IClient): Promise<Client> => {
  const clientsAll = await getAll();

  const hash = bcrypt.hashSync(data.password, 10);
  const check = descriptografia(data.password, hash);
  if (!check) throw entryMsgStatusError(StatusCodes.UNAUTHORIZED, MSG.INCORRECT_PASSWORD);

  const findClient = clientsAll.find((client: IClient) => client.email === data.email);
  if (findClient) throw entryMsgStatusError(StatusCodes.CONFLICT, MSG.EXISTING_USER);

  const result = await Model.create<IClient, Client>(data, ClientDAO, hash);
  return result;
};

export default {
  create,
  getAll
};

