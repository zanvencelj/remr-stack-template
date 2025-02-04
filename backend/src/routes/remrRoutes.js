const express = require('express');
const {validateRemr} = require("../middleware/validators");
const {getAllRemr, getRemrById, createRemr, updateRemr, deleteRemr} = require("../controllers/remrController");
const router = express.Router();

router.get('/', getAllRemr);
router.get('/:id', getRemrById);
router.post('/', validateRemr, createRemr);
router.put('/:id', validateRemr, updateRemr);
router.delete('/:id', deleteRemr);

module.exports = router;
