import bcrypt from 'bcryptjs';
// import { ProfessionalDAO } from '../../db/models/db_sequelize';

import Professional from '../../db/models/db_sequelize/professional';

import { MSG, StatusCodes } from '../enum/enumStatusAndMessage';
import entryMsgStatusError from '../helpers/entryMsgStatusError';
import { ProfessionalI, IProfessional } from '../interface';
import Model from '../models/model';
import descriptografia from '../utils/descriptografia';


const getAll = async (): Promise<ProfessionalI[]> => {
  const result = await Model.getAll<ProfessionalI>(Professional);
  if (!result) throw entryMsgStatusError(StatusCodes.OK, '[]');
  return result;
};

const create = async (data: IProfessional): Promise<Professional> => {
  const professionalAll = await getAll();

  const hash = bcrypt.hashSync(data.password, 10);
  const check = descriptografia(data.password, hash);
  if (!check) throw entryMsgStatusError(StatusCodes.UNAUTHORIZED, MSG.INCORRECT_PASSWORD);

  const findProfessional = professionalAll.find((professional: IProfessional) => professional.email === data.email);
  if (findProfessional) throw entryMsgStatusError(StatusCodes.CONFLICT, MSG.EXISTING_USER);

  const result = await Model.create<IProfessional, Professional>(data, Professional, hash);
  return result;
};

export default {
  create,
  getAll
};
