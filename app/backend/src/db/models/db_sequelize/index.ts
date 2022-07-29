import { Sequelize } from 'sequelize';

import databaseConfig from '../../config/config';

export default new Sequelize(databaseConfig);
