const sequelize = require('../config/db');
const Podjetje = require("./Podjetje");
const Funkcija = require("./Funkcija");
const Uporabnik = require("./Uporabnik");
const Poslovalnica = require("./Poslovalnica");



const initDB = async () => {
  await sequelize.sync({ force: false });
};

Funkcija.belongsTo(Podjetje);

module.exports = { Podjetje, Funkcija, Uporabnik, Poslovalnica, initDB };







