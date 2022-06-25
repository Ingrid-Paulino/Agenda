import jwt, { Secret } from 'jsonwebtoken';
import dotenv from 'dotenv';


dotenv.config();
const { env } = process;

const a = env.SECRET as Secret;

const createToken = (email: string) => {
  // const jwtConfig = {
  //   expiresIn: '7d',
  //   algorithm: 'HS256',
  // };

  const token = jwt.sign({ data: email }, a, {
    expiresIn: '7d',
    algorithm: 'HS256',
  });

  return token;
};

export default createToken;
