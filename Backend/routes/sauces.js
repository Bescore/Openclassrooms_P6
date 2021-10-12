const express = require( 'express' );
const router = express.Router();
const multer = require( '../Backend/middleware/multer-config' )

const saucesCtrl = require( '../controllers/piquante' );
const auth = require( '../middleware/auth' );




router.get( '/', auth, saucesCtrl.getAllSauce );
router.post( '/', auth, multer, saucesCtrl.createSauce );
router.get( '/:id', auth, saucesCtrl.getOneSauce );
router.put( '/:id', auth, saucesCtrl.modifySauce );
router.delete( '/:id', auth, saucesCtrl.deleteSauce );







module.exports = router;