const Livre=require('../models/Livre')
module.exports.createLivre=async(req,res)=>{
    try {
        const newLivre=await Livre.create(req.body)
        res.status(201).json(newLivre)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
/**
 * @description recuperer tous les livres
 * @router /livre
 * @methode GET
 */
module.exports.getAllLivre=async(req,res)=>{
    try {
        const getAll=await Livre.find().populate('auteur')
        res.status(200).json(getAll)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
/**
 * @description recuperer un livre 
 * @router /livre/:id
 * @method GET
 * 
 */
module.exports.getLivreById=async(req,res)=>{
    try {
        const getLivre=await Livre.findById(req.params.id).populate("auteur")
        if(!getLivre)
            return res.status(404).json({message:"Livre n'existe pas"})
        res.status(200).json(getLivre)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

/**
 * @description modifier un livre
 * @router /livre/:id
 * @method PUT
 */
module.exports.updateLivre=async(req,res)=>{
    try {
        const updatedLivre=
        await Livre.findByIdAndUpdate(req.params.id,req.body,{new:true}).populate('auteur')
        updatedLivre? 
        res.status(200).json(updatedLivre):
        res.status(404).json({message:"n'existe pas"})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

/**
 * @description supprimer  un livre
 * @router /livre/:id
 * @method DELETE
 */
module.exports.deleteLivre=async(req,res)=>{
    try {
        const deletedLivre=
        await Livre.findByIdAndDelete(req.params.id).populate('auteur')
        deletedLivre? 
        res.status(200).json(deletedLivre):
        res.status(404).json({message:"n'existe pas"})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

/***
 * @description livres entre deux prix
 * @router /livre/prix/:min/:max
 * @method GET
 */
module.exports.searchByPrice=async(req,res)=>{
    try {
        const {min,max}=req.params
        
        //$gte = superieur ou egal
        //$lte = inferieur ou egal
        const getLivre=await Livre.find({prix:{$gte:min,$lte:max}})
        res.status(200).json(getLivre)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
/**
 * @description recuperer les informations des livres selon ids
 * @router /livre/ids
 * @method GET
 */
module.exports.getBooksByIds=async(req,res)=>{
try {
    const {ids}=req.body
    const books=await Livre.find({_id :{$in:ids}})
    res.status(200).json(books)

} catch (error) {
    res.status(500).json({message:error.message})
}
}