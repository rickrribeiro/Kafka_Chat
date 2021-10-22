const express = require('express');
require('dotenv').config()
const app = express();
const port = 3000;
const admin = require('./admin')
const consumer = require('./consumer')
const producer = require('./producer')
app.use('/send',async (req,res)=>{
      consumer.on('error', function (err) {
        console.log('error', err);
      });
})


app.listen(port,()=>{
    console.log(`Rodando na porta ${port}!`)
})