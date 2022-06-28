import crypto from 'crypto';
import { Client, commonDates } from '../interface';

const getAll = async (sequelizeDAO: any): Promise<Client[]> => {
  const result = await sequelizeDAO.findAll();
  return result;
};

const create = async <T, T2>(data: T, sequelizeDAO: any, hash: string): Promise<T2> => {
  const id = crypto.randomUUID();

  const result = await sequelizeDAO.create({ id, ...data, password: hash, createdAt: new Date() });
  return result;
};

const findAnything = async <T2> (data: commonDates, sequelizeDAO: any): Promise<T2> => {
  try {
    const foundSomeThink = await sequelizeDAO.findOne({ where:  { email: data.email } });

    return foundSomeThink;
  } catch (error) {
    console.log('error', error);
    throw new Error(`error ${error}`);
  }
};

export default {
  create,
  getAll,
  findAnything
  // createOther
};
