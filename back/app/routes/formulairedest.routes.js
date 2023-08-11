const express = require ('express')

const router = express.Router();

const FomulairedestController = require ('../controllers/formulairedest.controller')

router.post('/ajouter', FomulairedestController.ajouterFomulairedest  )
router.post( '/:idformulairedest/modifier',FomulairedestController.modifierFomulairedest )
router.get('/:idformulairedest/supprimer',FomulairedestController.supprimerFomulairedest )
router.get('/lister',FomulairedestController.listerFomulairedest)
router.get('/mostbookeddestination', FomulairedestController.mostBookedDestination);
router.get('/daylybook',FomulairedestController.dailyDestBookings)
module.exports = router ;