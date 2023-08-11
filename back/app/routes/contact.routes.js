const express = require ('express')

const router = express.Router();

const ContactController = require ('../controllers/contact.controller')

router.post('/ajouter', ContactController.ajouterContact  )
router.post( '/:idcontact/modifier',ContactController.modifierContact )
router.get('/:idcontact/supprimer',ContactController.supprimerContact )
router.get('/lister',ContactController.listerContact)


module.exports = router ;