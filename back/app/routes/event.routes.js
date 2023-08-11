const express = require('express')

const router = require("express").Router();

const {
    getAllEvents,
    newEvent,
    getSingleEvent,
    getEventCount,
    updateEvent,
    deleteEvent,
   

} = require('../controllers/event.controller')


router.route('/events').get(getAllEvents);
router.route('/event/:id').get(getSingleEvent);
router.route('/events/count').get(getEventCount);

router.route('/event/new').post(newEvent);

router.route('/event/:id')
    .put( updateEvent)
    .delete( deleteEvent);




module.exports = router;
