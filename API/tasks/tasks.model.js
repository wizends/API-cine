const mongoose = require('mongoose');

const mongoosePaginate = require('mongoose-paginate-v2')

const peliculaSchema = new mongoose.Schema({
    "Title": String, 
    "Year": String,
    "Released": String, 
    "Genre": String,
    "Director": String,
    "Actors": String, 
    "Plot": String, 
    "Ratings":[{Source:String, Value:String}],
});

peliculaSchema.plugin(mongoosePaginate);

const Pelicula = mongoose.model('Cine', peliculaSchema);



module.exports = Pelicula;
