const express = require('express')
const mongoose = require('mongoose')
const app = express();
const itemRouter = require('./item/itemRouter')
const invoiceRouter = require('./invoice/invoiceRouter') 

mongoose.connect('mongodb://127.0.0.1:27017')

app.use(express.json())


app.listen(3000,()=>console.log('Server started'));
const db=mongoose.connection;
db.once('open',()=>console.log('Connected to the database'));
