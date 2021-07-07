const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const checkFormSauce = require('../middleware/checkFormSauce');

const sauceCtrl = require('../controllers/sauce');




router.post('/',auth,  multer, checkFormSauce, sauceCtrl.createSauce );
router.put('/:id',auth, multer, checkFormSauce, sauceCtrl.modifySauce );
router.delete('/:id',auth, sauceCtrl.deleteSauce);
router.get('/:id',auth, sauceCtrl.getOneSauce );
router.get('/',auth, sauceCtrl.getAllSauces) ;
router.post('/:id/like', auth, sauceCtrl.likeDislike);

module.exports = router;