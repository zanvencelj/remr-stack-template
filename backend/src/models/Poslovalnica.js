const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Podjetje = require('./Podjetje');

const Poslovalnica = sequelize.define('Poslovalnica', {
  ime: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  naslov: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  drzava: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mesto: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  postnaSt: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Poslovalnica.belongsTo(Podjetje);

module.exports = Poslovalnica;
