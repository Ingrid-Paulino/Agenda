
import { SpecialtieDAO } from '../../db/db_sequelize';
import { StatusCodes } from '../enum/enumStatusAndMessage';
import entryMsgStatusError from '../helpers/entryMsgStatusError';
import { ISpecialtie, Specialtie } from '../interface';
import Model from '../models/model';


const getAll = async (): Promise<Specialtie[]> => {
  const result = await Model.getAll<Specialtie>(SpecialtieDAO);
  if (!result) throw entryMsgStatusError(StatusCodes.OK, '[]');
  return result;
};

const create = async (data: ISpecialtie): Promise<Specialtie> => {
  const result = await Model.createOther<ISpecialtie, Specialtie>(data, SpecialtieDAO);

  return result;
};

export default {
  create,
  getAll
};
