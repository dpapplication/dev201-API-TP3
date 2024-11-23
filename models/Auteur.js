const mongoose =require('mongoose')
const auteurSchema=new mongoose.Schema({
    nom:{
        type:String,
        required:true,
        minlength:3,
        maxlength:30,
        trim:true
    },
    prenom:{
        type:String,
        required:true,
        minlength:3,
        maxlength:30,
        trim:true
    },
    bio:String
})

module.exports=mongoose.model('auteur',auteurSchema)