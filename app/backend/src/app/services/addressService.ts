// import { AddressDAO } from '../../db/models/db_sequelize';
import Address from '../../db/models/db_sequelize/address';

import { StatusCodes } from '../enum/enumStatusAndMessage';
import entryMsgStatusError from '../helpers/entryMsgStatusError';
import { IAddress, AddressI } from '../interface';
import Model from '../models/model';


const getAll = async (): Promise<AddressI[]> => {
  const result = await Model.getAll<AddressI>(Address);
  if (!result) throw entryMsgStatusError(StatusCodes.OK, '[]');
  return result;
};

const create = async (data: IAddress): Promise<AddressI> => {
  const result = await Model.createOther<IAddress, AddressI>(data, Address);

  return result;
};

export default {
  create,
  getAll
};

