import crypto from 'crypto';

const getAll = async <T>(sequelizeDAO: any): Promise<T[]> => {
  const result = await sequelizeDAO.findAll();
  return result;
};

const create = async <T, T2>(data: T, sequelizeDAO: any, hash: string): Promise<T2> => {
  const id = crypto.randomUUID();

  const result = await sequelizeDAO.create({ id, ...data, password: hash, createdAt: new Date() });
  return result;
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

const findAnything = async <T, T2> (data: T, sequelizeDAO: any): Promise<T2> => {
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
