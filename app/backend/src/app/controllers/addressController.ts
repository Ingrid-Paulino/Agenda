import { IAddress, Address } from '../interface';
import addressService from '../services/addressService';

const create = async (body: IAddress): Promise<Address> => {
  const result = await addressService.create(body);
  return result;
};

export default {
  create,
  // getAll
};
