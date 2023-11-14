const express = require('express');
const router = express.Router();
const loads = require('../services/loads');

router.get('/byDay/:dayId', async function(req, res, next) {
    try {
        res.json(await loads.getAllRichByDay(req.params.dayId));
    } catch (err) {
        console.error('Error while getting loads', err.message);
        next(err);
    }
});

router.get('/', async function(req, res, next) {
    try {
        res.json(await loads.getAll());
    } catch(err) {
        console.error('Error while getting loads', err.message);
        next(err);
    }
}),

module.exports = router;