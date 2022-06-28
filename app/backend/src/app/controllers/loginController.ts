import { commonDates } from '../interface';
import loginService from '../services/loginService';



const login = async (data: commonDates) => {
  const response = await loginService.login(data);
  return response;
};

export default {
  login
};
