const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Podjetje = sequelize.define('Podjetje', {
  imePodjetja: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  maticnaSt: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  davcnaSt: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  naslov: {
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
  drzava: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefonSt: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  spletnaStran: {
    type: DataTypes.STRING,
    allowNull: true,
  }
});

module.exports = Podjetje;
