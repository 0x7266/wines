const { Router } = require('express');
const { getWines, getWine } = require('../controllers/wine.controller');
const router = Router();

router.get('/', getWines);
router.get('/:id', getWine);

module.exports = router;
