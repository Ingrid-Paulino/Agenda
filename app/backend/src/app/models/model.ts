import crypto from 'crypto';
import { Client, IClient } from '../interface';

const getAll = async (sequelizeDAO: any): Promise<Client[]> => {
  const result = await sequelizeDAO.findAll();
  return result;
};

const create = async (data: IClient, sequelizeDAO: any, hash: string): Promise<Client> => {
  const id = crypto.randomUUID();

  const result = await sequelizeDAO.create({ id, ...data, password: hash, createdAt: new Date() });
  return result;
};

export default {
  create,
  getAll
};
