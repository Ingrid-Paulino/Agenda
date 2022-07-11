import bcrypt from 'bcryptjs';
import { AddressDAO, AdminDAO } from '../../db/db_sequelize';
import { MSG, StatusCodes } from '../enum/enumStatusAndMessage';
import entryMsgStatusError from '../helpers/entryMsgStatusError';
import { Admin, IAdmin } from '../interface';
import Model from '../models/model';
import descriptografia from '../utils/descriptografia';


const getAll = async (): Promise<Admin[]> => {
  console.log('0i3');

  const admins = await Model.getAllAdmin<Admin>(AdminDAO, AddressDAO, 'addresses');
  if (!admins) throw entryMsgStatusError(StatusCodes.OK, '[]');
  return admins;
};

const create = async (data: IAdmin): Promise<Admin> => {
  const adminAll = await getAll();

  const hash = bcrypt.hashSync(data.password, 10);
  const check = descriptografia(data.password, hash);
  if (!check) throw entryMsgStatusError(StatusCodes.UNAUTHORIZED, MSG.INCORRECT_PASSWORD);

  const findAdmin = adminAll.find((admin: IAdmin) => admin.email === data.email);
  if (findAdmin) throw entryMsgStatusError(StatusCodes.CONFLICT, MSG.EXISTING_USER);

  const result = await Model.create<IAdmin, Admin>(data, AdminDAO, hash);
  return result;
};

export default {
  create,
  getAll
};
