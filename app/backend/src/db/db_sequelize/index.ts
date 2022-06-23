import { Sequelize } from 'sequelize';
import vars from '../../vars';
import addressDAO from './address';
import adminDAO from './admin';
import clientDAO from './client';
import horaryDAO from './horary';
import professionalDAO from './professional';

const sequelize = new Sequelize(vars.mysql.uri, {
  dialect: 'mysql',
});

export const UserDAO = clientDAO(sequelize);
export const AddressDAO = addressDAO(sequelize);
export const AdminDAO = adminDAO(sequelize);
export const HourDAO = horaryDAO(sequelize);
export const ProfessionalDAO = professionalDAO(sequelize);

export default sequelize;
