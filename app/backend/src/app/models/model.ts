import crypto from 'crypto';
import { commonDates } from '../interface';

const getAll = async <T> (sequelizeDAO: any): Promise<T[]> => {
  try {
    const result = await sequelizeDAO.findAll();
    return result;
  } catch (error) {
    console.log('error', error);
    throw new Error(`error ${error}`);
  }
};

const create = async <T, T2>(data: T, sequelizeDAO: any, hash: string): Promise<T2> => {
  try {
    const id = crypto.randomUUID();

    const result = await sequelizeDAO.create({ id, ...data, password: hash, createdAt: new Date() });
    return result;
  } catch (error) {
    console.log('error', error);
    throw new Error(`error ${error}`);
  }
};

const createOther = async <T, T2> (data: T, sequelizeDAO: any): Promise<T2> => {
  try {
    const id = crypto.randomUUID();

    const result = await sequelizeDAO.create({ id, ...data, createdAt: new Date() });
    return result;
  } catch (error) {
    console.log('error', error);
    throw new Error(`error ${error}`);
  }
};

const findAnything = async <T extends commonDates, T2> (data: T, sequelizeDAO: any): Promise<T2> => {
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
  findAnything,
  createOther
};
