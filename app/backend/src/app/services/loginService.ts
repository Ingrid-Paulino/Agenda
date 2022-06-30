import { Client, commonDates } from '../interface';
import Model from '../models/model';
import { ClientDAO } from '../../db/db_sequelize';
import entryMsgStatusError from '../helpers/entryMsgStatusError';
import { StatusCodes, MSG } from '../enum/enumStatusAndMessage';
// import descriptografia from '../utils/descriptografia';
import bcrypt from 'bcryptjs';
import createToken from './createToken';

const login = async (data: commonDates) => {
  const objClient = await Model.findAnything<commonDates, Client>(data, ClientDAO);

  const checkPassword = await bcrypt.compare(data.password, objClient.password);

  if (!checkPassword) {
    throw entryMsgStatusError(StatusCodes.UNAUTHORIZED, MSG.INVALID_FIELDS);
  }

  const token = createToken(data.email);
  return token;
};

export default {
  login
};
