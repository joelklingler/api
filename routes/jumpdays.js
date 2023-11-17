const express = require('express');
const router = express.Router();
const jumpdays = require('../services/jumpdays');

router.get('/', async function(req, res, next) {
    try {
        res.json(await jumpdays.getAll());
    } catch (err) {
        console.error('Error while getting jumpdays: ', err.message);
        next(err);
    }
});

router.get('/:id', async function(req, res, next) {
    try {
        res.json(await jumpdays.get(req.params.id));
    } catch (err) {
        console.error('Error while getting jumpday with id: ', err.message);
        next(err);
    }
});

router.get('/:id/loads', async function(req, res, next) {
    try {
        res.json(await jumpdays.getEnrichedDay(req.params.id));
    } catch (err) {
        console.error('Error while loading rich day', err.message);
        next(err);
    }
});

router.post('/', async function(req, res, next) {
    try {
        console.log(req.body);
        res.json(await jumpdays.create(req.body));
    } catch (err) {
        console.error('Error while creating jumpday', err.message);
        next(err);
    }
});

router.put('/:id', async function(req, res, next) {
    try {
        res.json(await jumpdays.update(req.params.id, req.body));
    } catch(err) {
        console.error('Error while updating jumpday', err.message);
        next(err);
    }
});

router.delete('/:id', async function(req, res, next) {
    try {
        res.json(await jumpdays.remove(req.params.id));
    } catch(err) {
        console.error('Error while deleting jumpday', err.message);
        next(err);
    }
});

module.exports = router;