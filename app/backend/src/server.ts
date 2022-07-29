
import api from './api'

import db_sequelize from './db/models/db_sequelize';
// const db_sequelize = require('./db/models/db_sequelize');
import vars from './vars';

db_sequelize.authenticate()
  .then(() => {
    api.listen(vars.api.port, () => {
      console.log(`running on port ${vars.api.port}`);
    });
  })
  .catch((error: Error) => {
    console.error(error);

    process.exit(1);
  });
