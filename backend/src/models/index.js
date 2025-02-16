const sequelize = require('../config/db');
const Remr = require("./Remr");
const Task = require("./Task");

const initDB = async () => {
  await sequelize.sync({ force: false });
};

module.exports = { Remr, Task, initDB };
