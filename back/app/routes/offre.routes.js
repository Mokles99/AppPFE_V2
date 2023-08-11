const express = require('express')

const router = require("express").Router();

const {
    getAllOffres,
    newOffre,
    getSingleOffre,
    updateOffre,
    deleteOffre,
   

} = require('../controllers/offre.controller')


router.route('/offres').get(getAllOffres);
router.route('/offre/:id').get(getSingleOffre);

router.route('/offre/new').post(newOffre);

router.route('/offre/:id')
    .put( updateOffre)
    .delete( deleteOffre);




module.exports = router;
