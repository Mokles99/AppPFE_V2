const express = require ('express')

const router = express.Router();

const FormulaireeventController = require ('../controllers/formulaireevent.controller')

router.post('/ajouter', FormulaireeventController.ajouterFormulaireevent  )
router.post( '/:idformulaireevent/modifier',FormulaireeventController.modifierFormulaireevent )
router.get('/:idformulaireevent/supprimer',FormulaireeventController.supprimerFormulaireevent )
router.get('/lister',FormulaireeventController.listerFormulaireevent)
router.get('/mostbookedevent',FormulaireeventController.mostBookedEvent)
router.get('/daylybook',FormulaireeventController.dailyEventBookings)
module.exports = router ;