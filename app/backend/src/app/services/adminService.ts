import bcrypt from 'bcryptjs';
// import { AdminDAO } from '../../db/models/db_sequelize';
import Admin from '../../db/models/db_sequelize/admin';
import { MSG, StatusCodes } from '../enum/enumStatusAndMessage';
import entryMsgStatusError from '../helpers/entryMsgStatusError';
import { IAdmin, AdminI } from '../interface';
import Model from '../models/model';
import descriptografia from '../utils/descriptografia';


const getAll = async (): Promise<AdminI[]> => {
  const result = await Model.getAll<AdminI>(Admin);
  if (!result) throw entryMsgStatusError(StatusCodes.OK, '[]');
  return result;
};

const create = async (data: IAdmin): Promise<AdminI> => {
  const adminAll = await getAll();

  const hash = bcrypt.hashSync(data.password, 10);
  const check = descriptografia(data.password, hash);
  if (!check) throw entryMsgStatusError(StatusCodes.UNAUTHORIZED, MSG.INCORRECT_PASSWORD);

  const findAdmin = adminAll.find((admin: IAdmin) => admin.email === data.email);
  if (findAdmin) throw entryMsgStatusError(StatusCodes.CONFLICT, MSG.EXISTING_USER);

  const result = await Model.create<IAdmin, AdminI>(data, Admin, hash);
  return result;
};

export default {
  create,
  getAll
};
