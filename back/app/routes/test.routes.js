const express = require('express')

const router = require("express").Router();

const {
    getAllTests,
    newTest,
    getSingleTest,
    updateTest,
    deleteTest,
   

} = require('../controllers/test.controller')


router.route('/tests').get(getAllTests);
router.route('/test/:id').get(getSingleTest);

router.route('/test/new').post(newTest);

router.route('/test/:id')
    .put( updateTest)
    .delete( deleteTest);




module.exports = router;
