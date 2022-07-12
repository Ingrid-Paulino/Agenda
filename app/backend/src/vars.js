import dotenv from 'dotenv';

dotenv.config();
const { env } = process;

export default {
  // configuração por base de cada pasta
  api: {
    port: Number(env.API_PORT || env.PORT || 3004)
  },
  mysql: {
    uri: env.MYSQL_URI || 'mysql://root:123456@127.0.0.1:3002/agenda'
  },
};
