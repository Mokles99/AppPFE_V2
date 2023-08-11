const express = require ('express');
const { createReview, getAllReviewsByHotelId } = require('../controllers/reviewhotel.controller');
// import { verify User }  apres on le met avant create review

const {authJwt} = require ('../middlewares')

const router = express.Router();
router.post('/:idhotel' ,authJwt.verifyToken  , createReview)
router.route('/reviewsByHotelId/:id').get(getAllReviewsByHotelId);
module.exports = router ;