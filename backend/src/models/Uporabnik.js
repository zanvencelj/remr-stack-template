const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Podjetje = require('./Podjetje');
const Funkcija = require('./Funkcija');

const Uporabnik = sequelize.define('Uporabnik', {
  ime: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  priimek: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefonSt: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  geslo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Uporabnik.belongsTo(Podjetje);
Uporabnik.belongsTo(Funkcija);


module.exports = Uporabnik;
