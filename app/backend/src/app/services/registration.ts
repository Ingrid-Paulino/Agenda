import { IClient, Client } from '../interface';
import RegisterModel from '../models//registration';


const create = async (data: IClient): Promise<Client> => {
  const result = await RegisterModel.create(data);
  return result;
};

export default {
  create
};

