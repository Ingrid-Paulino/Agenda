// 'use strict';

// const fs = require('fs');
// const path = require('path');
// const Sequelize = require('sequelize');
// const basename = path.basename(__filename);
// const env = process.env.NODE_ENV || 'development';
// const config = require(__dirname + '/../../config/config.json')[env];
// const db = {};

// let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   sequelize = new Sequelize(config.database, config.username, config.password, config);
// }

// fs
//   .readdirSync(__dirname)
//   .filter(file => {
//     return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
//   })
//   .forEach(file => {
//     const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// module.exports = db;

import { Sequelize } from "sequelize"
import vars from "../../vars"
import addressDAO from "./address"
import adminDAO from "./admin"
import horaryDAO from "./horary"
import professionalDAO from "./professional"
import clientDAO from "./client"

const sequelize = new Sequelize(vars.mysql.uri, {
  dialect: "mysql",
})

export const UserDAO = clientDAO(sequelize)
export const AddressDAO = addressDAO(sequelize)
export const AdminDAO = adminDAO(sequelize)
export const HourDAO = horaryDAO(sequelize)
export const ProfessionalDAO = professionalDAO(sequelize)

export default sequelize
