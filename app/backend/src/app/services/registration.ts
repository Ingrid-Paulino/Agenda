import { IClient, Client } from '../interface';
import { ClientDAO } from '../../db/db_sequelize';
import RegisterModel from '../models/model';
import entryMsgStatusError from '../helpers/entryMsgStatusError';
import { MSG, StatusCodes } from '../enum/enumStatusAndMessage';
import descriptografia from '../utils/descriptografia';
import bcrypt from 'bcryptjs';


const getAll = async (): Promise<Client[]> => {
  const result = await RegisterModel.getAll(ClientDAO);
  return result;
};

const create = async (data: IClient): Promise<Client> => {
  const clientsAll = await getAll();

  const hash = bcrypt.hashSync(data.password, 10);
  const check = descriptografia(data.password, hash);
  if (!check) throw entryMsgStatusError(StatusCodes.UNAUTHORIZED, MSG.INCORRECT_PASSWORD);

  const findClient = clientsAll.find((client: IClient) => client.email === data.email);
  if (findClient) throw entryMsgStatusError(StatusCodes.CONFLICT, MSG.EXISTING_USER);

  const result = await RegisterModel.create(data, ClientDAO, hash);
  return result;
};

export default {
  create,
  getAll
};

