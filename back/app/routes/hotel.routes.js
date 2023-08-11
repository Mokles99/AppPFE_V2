const express = require ('express')

const router = express.Router();

const {
    getAllHotels,
    newHotel,
    getSingleHotel,
    updateHotel,
    deleteHotel,
    searchByTitleAndCity,
   

} = require('../controllers/hotel.controller')


router.route('/hotels').get(getAllHotels);
router.route('/hotel/:id').get(getSingleHotel);

router.route('/hotel/new').post(newHotel);

router.route('/hotel/:id')
    .put( updateHotel)
    .delete( deleteHotel);

// router.get
// ('/search', HotelController.searchByTitleAndCity)

router.route('/search').get(searchByTitleAndCity);
module.exports = router ;