const { Sequelize } = require('sequelize');
const config = require('./config');

const sequelize = new Sequelize(config.DB_NAME, config.DB_USER, config.DB_PASSWORD, {
  host: config.DB_HOST,
  port: config.DB_PORT,
  dialect: 'mariadb',
  dialectOptions: {
    charset: 'utf8',
  },
  define: {
    charset: 'utf8',
    collate: 'utf8_general_ci',
  },
});

sequelize.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.error('Error: ' + err));

module.exports = sequelize;
