const router=require('express').Router()
const {createAuteur,getAllAuteur,getAuteurById,updateAuteur,deleteAuteur}=
require('../controllers/auteurController')
const valideId=require("../middlewares/isValideIdObject")
router.post('/',createAuteur)
router.get('/',getAllAuteur)
router.get('/:id',valideId,getAuteurById)
router.delete('/:id',valideId,deleteAuteur)
router.put('/:id',valideId,updateAuteur)




module.exports=router