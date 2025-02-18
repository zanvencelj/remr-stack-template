const express = require('express');
const { newPodjetje, newUporabnik } = require('../controllers/avtentikacijaController');
const router = express.Router();

router.post('/podjetje/register', newPodjetje);
router.post('/uporabnik/register', newUporabnik);

module.exports = router;
