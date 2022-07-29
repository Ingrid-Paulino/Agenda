import { ProfessionalI, IProfessional } from '../interface';
import validateSchema from '../schemas';
import professionalService from '../services/professionalService';

const getAll = async (): Promise<ProfessionalI[]> => {
  const result = await professionalService.getAll();
  return result;
};

// const create = async (body: IProfessional): Promise<ProfessionalI> => {
//   const data = await validateSchema.ProfessionalSchema(body);
//   const result = await professionalService.create(data);
//   return result;
// };

export default {
  // create,
  getAll
};
