const express = require('express')

const router = require("express").Router();

const {
    getAllGalleryevents,
    newGalleryevent,
    getSingleGalleryevent,
    updateGalleryevent,
    deleteGalleryevent,
   

} = require('../controllers/galleryevent.controller')


router.route('/galleryevents').get(getAllGalleryevents);
router.route('/galleryevent/:id').get(getSingleGalleryevent);

router.route('/galleryevent/new').post(newGalleryevent);

router.route('/galleryevent/:id')
    .put( updateGalleryevent)
    .delete( deleteGalleryevent);




module.exports = router;
