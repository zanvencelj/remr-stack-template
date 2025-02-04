const sequelize = require('../config/db');
const Remr = require("./Remr");

const initDB = async () => {
  await sequelize.sync({ force: false });
};

module.exports = { Remr, initDB };
