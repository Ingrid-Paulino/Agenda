import crypto from 'crypto';
import { UserDAO } from '../../db/db_sequelize';
import { Client, IClient } from '../interface';


const create = async (data: IClient): Promise<Client> => {
  const id = crypto.randomUUID();
  const result = await UserDAO.create({ id, ...data, createdAt: new Date() });

  return result;
};

export default {
  create
};

