// import { SpecialtieDAO } from '../../db/models/db_sequelize';

import Specialtie from '../../db/models/db_sequelize/specialtie';

import { StatusCodes } from '../enum/enumStatusAndMessage';
import entryMsgStatusError from '../helpers/entryMsgStatusError';
import { ISpecialtie, SpecialtieI } from '../interface';
import Model from '../models/model';


const getAll = async (): Promise<SpecialtieI[]> => {
  const result = await Model.getAll<SpecialtieI>(Specialtie);
  if (!result) throw entryMsgStatusError(StatusCodes.OK, '[]');
  return result;
};

const create = async (data: ISpecialtie): Promise<Specialtie> => {
  const result = await Model.createOther<ISpecialtie, Specialtie>(data, Specialtie);

  return result;
};

export default {
  create,
  getAll
};
