const express = require('express');
const { registracijaPodjetja, registracijaUporabnika } = require("../controllers/avtentikacijaController");
const router = express.Router();

router.post('/podjetje/register', registracijaPodjetja);
router.post('/uporabnik/register', registracijaUporabnika);

module.exports = router;
