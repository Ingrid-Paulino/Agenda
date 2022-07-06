import { ISpecialtie, Specialtie } from '../interface';
import validateSchema from '../schemas';
import specialtieService from '../services/specialtiesService';

const getAll = async (): Promise<Specialtie[]> => {
  const result = await specialtieService.getAll();
  return result;
};

const create = async (body: ISpecialtie): Promise<Specialtie> => {
  const data = await validateSchema.SpecialtiesSchema(body);
  const result = await specialtieService.create(data);
  return result;
};

export default {
  create,
  getAll
};
