
import { HourDAO } from '../../db/db_sequelize';
import { StatusCodes } from '../enum/enumStatusAndMessage';
import entryMsgStatusError from '../helpers/entryMsgStatusError';
import { IHorary, Horary } from '../interface';
import Model from '../models/model';


const getAll = async (): Promise<Horary[]> => {
  console.log('oiiiii3');
  const result = await Model.getAll<Horary>(HourDAO);
  console.log('oiiiii4');
  if (!result) throw entryMsgStatusError(StatusCodes.OK, '[]');
  return result;
};

const create = async (data: IHorary): Promise<Horary> => {
  const result = await Model.createOther<IHorary, Horary>(data, HourDAO);

  return result;
};

export default {
  create,
  getAll
};
