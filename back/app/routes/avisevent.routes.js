const express = require ('express')

const router = express.Router();

const AviseventController = require ('../controllers/avisevent.controller')

router.post('/ajouter', AviseventController.ajouterAvisevent  )
router.post( '/:idavisevent/modifier',AviseventController.modifierAvisevent )
router.get('/:idavisevent/supprimer',AviseventController.supprimerAvisevent )
router.get('/lister',AviseventController.listerAvisevent)


module.exports = router ;