import bcrypt from 'bcryptjs';
// import { Client as any } from '../../db/models/db_sequelize';

import Client from '../../db/models/db_sequelize/client';


import { MSG, StatusCodes } from '../enum/enumStatusAndMessage';
import entryMsgStatusError from '../helpers/entryMsgStatusError';
import { Clientt, IClient } from '../interface';
import Model from '../models/model';
import descriptografia from '../utils/descriptografia';


const getAll = async (): Promise<Clientt[]> => {
  const result = await Model.getAll<Clientt>(Client);
  if (!result) throw entryMsgStatusError(StatusCodes.OK, '[]');
  return result;
};

const create = async (data: IClient): Promise<Clientt> => {
  const clientsAll = await getAll();

  const hash = bcrypt.hashSync(data.password, 10);
  const check = descriptografia(data.password, hash);
  if (!check) throw entryMsgStatusError(StatusCodes.UNAUTHORIZED, MSG.INCORRECT_PASSWORD);

  const findClient = clientsAll.find((client: IClient) => client.email === data.email);
  if (findClient) throw entryMsgStatusError(StatusCodes.CONFLICT, MSG.EXISTING_USER);

  const result = await Model.create<IClient, Clientt>(data, Client, hash);
  return result;
};

export default {
  create,
  getAll
};

