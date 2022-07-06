import { commonDates } from '../interface';
import loginService from '../services/loginService';
import validateSchema from '../schemas';




const login = async (body: commonDates) => {
  const data = await validateSchema.LoginSchema(body);
  const response = await loginService.login(data);
  return response;
};

export default {
  login
};
