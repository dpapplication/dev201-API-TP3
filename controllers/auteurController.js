const Auteur = require("../models/Auteur");
/***
 * @description creer un nouveau auteur
 * @router /auteur
 * @methode Post
 */
module.exports.createAuteur = async (req, res) => {
  try {
    const newAuteur = await Auteur.create(req.body);
    res.status(201).json(newAuteur);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * @description Recuperer tous les auteurs
 * @router /auteur
 * @method GET
 */
module.exports.getAllAuteur=async(req,res)=>{
    try {
        const allAuteur = await Auteur.find().populate('livre');
        res.status(200).json(allAuteur);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

/**
 * @description recuperer un auteur selon id
 * @router /auteur/:id
 * @method GET
 */
 module.exports.getAuteurById=async (req, res) => {
    try {
      const getAuteur = await Auteur.findById(req.params.id);
      if (!getAuteur)
        res.status(404).json({ message: "Cet auteur n'existe pas" });
      else res.status(200).json(getAuteur);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  

  /**
 * @description Supprimer un auteur
 * @router /auteur/:id
 * @method Delete
 * 
 */
module.exports.deleteAuteur= async (req, res) => {
    const getAuteur = await Auteur.findById(req.params.id);
    if (!getAuteur)
      return res.status(404).json({ message: "Cet Auteur n'existe pas" });
    await Auteur.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Cet auteur bien supprime" });
  }

  /**
 * @description Modifier un auteur
 * @router /auteur/:id
 * @method PUT
 */
module.exports.updateAuteur=async (req, res) => {
    try {
      const getAuteur = await Auteur.findById(req.params.id);
      if (!getAuteur)
        return res.status(404).json({ message: "Cet auteur n'existe pas" });
      const updateAuteur = await Auteur.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.status(200).json(updateAuteur);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }