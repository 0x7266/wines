const { Router } = require('express');
const wineRoute = require('./wine.route.js');
const router = Router();

router.use('/wine', wineRoute);

module.exports = router;
