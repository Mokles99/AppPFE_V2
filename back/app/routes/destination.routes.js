const express = require('express')

const router = require("express").Router();

const {
    getAllDestinations,
    newDestination,
    getSingleDestination,
    updateDestination,
    deleteDestination,
    searchDestination
   

} = require('../controllers/destination.controller')


router.route('/destinations').get(getAllDestinations);
router.route('/destination/:id').get(getSingleDestination);

router.route('/destination/new').post(newDestination);

router.route('/destination/:id')
    .put( updateDestination)
    .delete( deleteDestination);

router.route('/search').get(searchDestination);

module.exports = router;
