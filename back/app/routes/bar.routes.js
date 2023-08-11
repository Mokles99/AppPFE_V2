const express = require('express');
const multer = require('multer');
const BarController = require('../controllers/bar.controller');

const router = express.Router();

const upload = multer({ dest: 'uploads/' });

router.get('/lister', BarController.getBars);
router.post('/ajouter', upload.single('image'), BarController.createBar);
router.put('/modifier/:id', upload.single('image'), BarController.updateBar);
router.delete('/supprimer/:id', BarController.deleteBar);

module.exports = router;
