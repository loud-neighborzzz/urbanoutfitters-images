const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')
const Image = require('../database/Schema.js');
const Port = 3000;
const compression = require('compression')

app.use(cors())
app.use(compression())
app.use(bodyParser.json())
app.use(express.static(__dirname + '/../client/dist'))

app.get('/:id', (req,res)=> {
  res.sendFile('index.html', {root: __dirname + '/../client/dist'})
})

app.get('/images/:itemId', (req, res)=> {
  Image.find({itemId: req.params.itemId}, (err, data)=>{
    if (err) console.log(err)
    res.status(200).send(data)
  }).sort({color: -1})
})

app.listen(Port, ()=> {
  console.log(`now listening on port ${Port}!`)
})
