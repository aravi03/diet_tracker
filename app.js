const express=require('express');
const app=express();
ObjectId = require('mongodb').ObjectID;
var cors = require('cors');
const { ObjectID } = require('mongodb');
const path = require('path');

app.use(cors());
bodyParser = require('body-parser');

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api',require('./routes/api'));
app.use('/',express.static('./client/build'));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'/client/build/index.html'));
})

const PORT = process.env.PORT || 5000;

app.listen(PORT);







