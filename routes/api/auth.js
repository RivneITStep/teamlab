const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('Authorization Route'));

module.exports = router;
