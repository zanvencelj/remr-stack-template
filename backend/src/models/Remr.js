const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Remr = sequelize.define('Remr', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING(1000),
    allowNull: false,
  },
});

module.exports = Remr;
