const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
  invoice_id:{
    type:String
  },
  total:{
    type:Number
  },
  discount:{
    type:Number
  }
});

module.exports = mongoose.model('Invoice', invoiceSchema);
