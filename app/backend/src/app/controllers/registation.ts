import { IClient, Client } from '../interface';
import validateSchema from '../schemas';
import RegisterService from '../services/registration';


const create = async (body: IClient): Promise<Client> => {
  const data = await validateSchema.ClientSchema(body);
  const result = await RegisterService.create(data);
  return result;
};

export default {
  create
};
