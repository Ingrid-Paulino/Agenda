import { IAddress, AddressI } from '../interface';
import addressService from '../services/addressService';
import validateSchema from '../schemas';

const getAll = async (): Promise<AddressI[]> => {
  const result = await addressService.getAll();
  return result;
};

const create = async (body: IAddress): Promise<AddressI> => {
  const data = await validateSchema.AddressSchema(body);
  const result = await addressService.create(data);
  return result;
};

export default {
  create,
  getAll
};
