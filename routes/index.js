const { Router } = require('express');


const router = Router()

router.use('/', require('./realTimeNFT.js'));

router.get('/ping', (req, res) => res.send('OK'))




export { router }
