import { AddressDAO } from '../../db/db_sequelize';
// import { MSG, StatusCodes } from '../enum/enumStatusAndMessage';
// import entryMsgStatusError from '../helpers/entryMsgStatusError';
import { IAddress, Address } from '../interface';
import Model from '../models/model';


// const getAll = async (): Promise<Address[]> => {
//   const result = await Model.getAll(AddressDAO);
//   if (!result) throw entryMsgStatusError(StatusCodes.OK, '[]');
//   return result;
// };

const create = async (data: IAddress): Promise<Address> => {
  const result = await Model.createOther<IAddress, Address>(data, AddressDAO);

  return result;
};

export default {
  create,
  // getAll
};

