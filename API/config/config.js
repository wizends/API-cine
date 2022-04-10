const mongoose = require('mongoose');


const user = 'wizends';
const password = 'vBVqtlOW4aflOiHt';
const dbname = 'cine'
const uri = `mongodb+srv://${user}:${password}@cluster0.nnrgh.mongodb.net/${dbname}?retryWrites=true&w=majority`;

const Open = async () => {
   try {
      await mongoose.connect(uri);
      return console.log('bd conectada');
   } catch (e) {
      return console.log(e);
   }
}

module.exports = Open;



