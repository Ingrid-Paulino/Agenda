import crypto from 'crypto';
import { Client } from '../interface';

const getAll = async (sequelizeDAO: any): Promise<Client[]> => {
  const result = await sequelizeDAO.findAll();
  return result;
};

// const create = async (data: IClient, sequelizeDAO: any, hash: string): Promise<Client> => {
//   const id = crypto.randomUUID();

//   const result = await sequelizeDAO.create({ id, ...data, password: hash, createdAt: new Date() });
//   return result;
// };

const create = async <T>(data: T, sequelizeDAO: any, hash: string): Promise<Client> => {
  const id = crypto.randomUUID();

  const result = await sequelizeDAO.create({ id, ...data, password: hash, createdAt: new Date() });
  return result;
};


const findAnything = async <T> (campo: T, sequelizeDAO: any) => {
  try {
    console.log({ campo });

    const foundSomeThink = await sequelizeDAO.findOne({ where: campo });
    console.log({ foundSomeThink });
    

    return foundSomeThink;

  } catch (error) {
    console.log('error', error);
  }
};

export default {
  create,
  getAll,
  findAnything
};
