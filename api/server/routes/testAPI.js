const express = require('express');
let router = express.Router();


router.get('/', (req, res, next) => {
    res.send('Api is working properly');
})

module.exports = router;