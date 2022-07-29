import { IAdmin, AdminI } from '../interface';
import validateSchema from '../schemas';
import adminService from '../services/adminService';

const getAll = async (): Promise<AdminI[]> => {
  const result = await adminService.getAll();
  return result;
};

const create = async (body: IAdmin): Promise<AdminI> => {
  const data = await validateSchema.AdminSchema(body);
  const result = await adminService.create(data);
  return result;
};

export default {
  create,
  getAll
};
