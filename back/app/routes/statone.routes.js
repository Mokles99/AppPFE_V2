const express = require('express')

const router = require("express").Router();



const {
    getStatCount
   

} = require('../controllers/statone.controller')


router.route('/count').get(getStatCount);

module.exports = router ;