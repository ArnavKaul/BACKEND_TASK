const mongoose = require('mongoose');

    const itemSchema = new mongoose.Schema({
    id:{
      type:String
    } ,
    stock:{
     type : Number
    },
    price: {
        type     : Number
       
        }
      }
    )

module.exports = mongoose.model('ITEM', itemSchema);

    