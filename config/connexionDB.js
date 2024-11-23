const mongoose =require('mongoose')
function connection(){
    mongoose.connect('mongodb://localhost:27017/LivreDB')
    .then(()=>console.log('Connexion bien etabli'))
    .catch(e=>console.log(e))
}

module.exports=connection