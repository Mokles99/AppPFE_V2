const express = require('express')

const router = require("express").Router();



const {
    getStatCount
   

} = require('../controllers/stat.controller')


router.route('/count').get(getStatCount);

module.exports = router ;