
// import { HourDAO } from '../../db/models/db_sequelize';
import Horary from '../../db/models/db_sequelize/horary';

import { StatusCodes } from '../enum/enumStatusAndMessage';
import entryMsgStatusError from '../helpers/entryMsgStatusError';
import { IHorary, HoraryI } from '../interface';
import Model from '../models/model';


const getAll = async (): Promise<HoraryI[]> => {
  console.log('oiiiii3');
  const result = await Model.getAll<HoraryI>(Horary);
  console.log('oiiiii4');
  if (!result) throw entryMsgStatusError(StatusCodes.OK, '[]');
  return result;
};

const create = async (data: IHorary): Promise<HoraryI> => {
  const result = await Model.createOther<IHorary, HoraryI>(data, Horary);

  return result;
};

export default {
  create,
  getAll
};
