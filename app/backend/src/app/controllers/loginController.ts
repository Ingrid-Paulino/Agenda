import { commonDates } from '../interface';
import loginService from '../services/loginService';



const login = async (data: commonDates) => {
  const { email, password } = data;

  const response = await loginService.login({ email, password });
  return response;
};

export default {
  login
};
