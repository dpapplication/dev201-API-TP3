const mongoose=require('mongoose')
const livreSchema=new mongoose.Schema({
    titre:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    prix:{
        type:Number,
        required:true,
        min:100,
        max:1000,
    },
    categorie:{
        type:String,
        enum:['Sport','Design','Philosophie','Science']
    },
    image:String,
    auteur:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"auteur",
        required:true
    }
},{
   timestamps:true 
})
module.exports=mongoose.model('livre',livreSchema)