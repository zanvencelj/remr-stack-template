const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const { Podjetje } = require('./Podjetje');

const Funkcija = sequelize.define('Funkcija', {
  funkcija: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Funkcija.belongsTo(Podjetje);

module.exports = Funkcija;
