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
  retry: {
    max: 10, // Retry up to 10 times
    match: [/ECONNREFUSED/],
  }
});

let retryCount = 0;
const maxRetries = 10;

const connectWithRetry = () => {
  return sequelize.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => {
      if (retryCount < maxRetries) {
        retryCount++;
        console.error(`Error: ${err}. Retrying (${retryCount}/${maxRetries})...`);
        setTimeout(connectWithRetry, 5000); // Retry after 5 seconds
      } else {
        console.error('Max retries reached or different error occurred:', err);
      }
    });
};

connectWithRetry();

module.exports = sequelize;
