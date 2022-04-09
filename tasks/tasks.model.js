const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const peliculaSchema = new Schema({

    Title: String, 
    Year: String,
    Released: String, 
    Genre: String,
    Director: String,
    Actors: String, 
    Plot: String, 
    Ratings:[{
        Source:String,
        Value:String
    }]
});

const Pelicula = mongoose.model('Cine', peliculaSchema);

module.exports = Pelicula;
