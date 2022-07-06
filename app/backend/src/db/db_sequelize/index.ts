import { Sequelize } from 'sequelize';
import vars from '../../vars';
import addressDAO from './address';
import adminDAO from './admin';
import clientDAO from './client';
import horaryDAO from './horary';
import professionalDAO from './professional';
import specialtieDAO from './specialtie';

const sequelize = new Sequelize(vars.mysql.uri, {
  logging: false, // Inpede que o sequelize envie SQL para o console na execução da consulta
  dialect: 'mysql',
});

export const ClientDAO = clientDAO(sequelize);
export const AddressDAO = addressDAO(sequelize);
export const AdminDAO = adminDAO(sequelize);
export const HourDAO = horaryDAO(sequelize);
export const ProfessionalDAO = professionalDAO(sequelize);
export const SpecialtieDAO = specialtieDAO(sequelize);

export default sequelize;
