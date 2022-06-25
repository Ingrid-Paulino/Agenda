import { Client, commonDates } from '../interface';
import Model from '../models/model';
import { ClientDAO } from '../../db/db_sequelize';
import entryMsgStatusError from '../helpers/entryMsgStatusError';
import { StatusCodes, MSG } from '../enum/enumStatusAndMessage';
// import descriptografia from '../utils/descriptografia';
import bcrypt from 'bcryptjs';
import createToken from './createToken';


const getAll = async (): Promise<Client[]> => {
  const result = await Model.getAll(ClientDAO);
  if (!result) throw entryMsgStatusError(StatusCodes.OK, '[]');
  return result;
};


const login = async (data: commonDates) => {
  const allClients = await getAll();

  const findCorect = allClients.map(async (client): Promise<boolean | undefined> => {
    const match = await bcrypt.compare(data.password, client.password);

    if (client.email === data.email && match) {
      // console.log('existe email e senha!');
      return true;
    }
  });

  if (!findCorect) {
    return entryMsgStatusError(StatusCodes.UNAUTHORIZED, MSG.INVALID_FIELDS);
  }

  const token = createToken(data.email);

  return token;
};

export default {
  login
};
