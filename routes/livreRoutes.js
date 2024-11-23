const router =require('express').Router()
const livreController=require('../controllers/livreController')
const valideId =require("../middlewares/isValideIdObject")
router.post('/',livreController.createLivre)
router.get('/',livreController.getAllLivre)
router.get('/:id',valideId,livreController.getLivreById)
router.put('/:id',valideId,livreController.updateLivre)

module.exports=router