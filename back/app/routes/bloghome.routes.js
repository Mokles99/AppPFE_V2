const express = require('express')

const router = require("express").Router();

const {
    getAllBloghomes,
    newBloghome,
    getSingleBloghome,
    updateBloghome,
    deleteBloghome,
   

} = require('../controllers/bloghome.controller')


router.route('/bloghomes').get(getAllBloghomes);
router.route('/bloghome/:id').get(getSingleBloghome);

router.route('/bloghome/new').post(newBloghome);

router.route('/bloghome/:id')
    .put( updateBloghome)
    .delete( deleteBloghome);




module.exports = router;
