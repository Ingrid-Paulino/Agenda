import 'dotenv/config';
import { Options } from 'sequelize'

const config: Options = {
  username: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD ||'123456',
  database: process.env.MYSQL_DATABASE || 'agenda',
  host: process.env.HOSTNAME || '127.0.0.1',
  port: 3307,
  dialect: 'mysql',
}

export = config;
