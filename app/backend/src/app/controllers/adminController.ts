import { IAdmin, Admin } from '../interface';
import validateSchema from '../schemas';
import adminService from '../services/adminService';

const getAll = async (): Promise<Admin[]> => {
  const result = await adminService.getAll();
  return result;
};

const create = async (body: IAdmin): Promise<Admin> => {
  const data = await validateSchema.AdminSchema(body);
  const result = await adminService.create(data);
  return result;
};

export default {
  create,
  getAll
};
