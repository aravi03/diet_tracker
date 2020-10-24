const express=require('express');
const router=express.Router();
ObjectId = require('mongodb').ObjectID;
const { ObjectID } = require('mongodb');
const path = require('path');

router.get('/search',function(req,res){

    name=req.query.name;
    console.log(name);
    var MongoClient = require('mongodb').MongoClient;
        MongoClient.connect('mongodb+srv://Aravinth:12345@cluster0.giy9v.mongodb.net/<dbname>?retryWrites=true&w=majority').then(function(client)
            {
                 var db=client.db('calorie-table');
                 var collection=db.collection("food");
                 return collection.find({"food" : {$regex : ".*"+name+".*", '$options' : 'i'}}).project({_id:0}).toArray();
                
            }).then(function(items){
                res.send(items);
            })
    })

    router.post('/createplan',function(req,res){
        // console.log(req.body);
        var mealplan = {
            items:req.body.myplan,
            date: req.body.datetime.slice(0,10),
            time: req.body.datetime.slice(11,16),
            status:'pending'
        }
        console.log(mealplan);
        var MongoClient = require('mongodb').MongoClient;
        MongoClient.connect('mongodb+srv://Aravinth:12345@cluster0.giy9v.mongodb.net/<dbname>?retryWrites=true&w=majority').then(function(client)
            {
                var db=client.db('calorie-table');
                var collection=db.collection("plan");
                return collection.insertOne(mealplan);
                
            }).then(function(items){
                // console.log(items);
            })
    })


    router.get('/viewplan',function(req,res){
        var date=req.query.date;
        console.log(date);
        var MongoClient = require('mongodb').MongoClient;
        MongoClient.connect('mongodb+srv://Aravinth:12345@cluster0.giy9v.mongodb.net/<dbname>?retryWrites=true&w=majority').then(function(client)
            {
                 var db=client.db('calorie-table');
                 var collection=db.collection("plan");
                 return collection.find({"date":date}).sort({time:1}).toArray();
                //  .project({_id:0})
            }).then(function(items){
                res.send(items);
            })
       }) 

       router.get('/acceptplan',function(req,res){
        var id=req.query.id;
        console.log('accepted',id);
        var MongoClient = require('mongodb').MongoClient;
        MongoClient.connect('mongodb+srv://Aravinth:12345@cluster0.giy9v.mongodb.net/<dbname>?retryWrites=true&w=majority').then(function(client)
            {
                 var db=client.db('calorie-table');
                 var collection=db.collection("plan");
                 return collection.updateOne(
                    {_id: ObjectID(id)},
                    { $set: { status:'accept'}}
                )
    
       })
    })
    router.get('/rejectplan',function(req,res){
        var id=req.query.id;
        var MongoClient = require('mongodb').MongoClient;
        MongoClient.connect('mongodb+srv://Aravinth:12345@cluster0.giy9v.mongodb.net/<dbname>?retryWrites=true&w=majority').then(function(client)
            {
                 var db=client.db('calorie-table');
                 var collection=db.collection("plan");
                 return collection.updateOne(
                    {_id: ObjectID(id)},
                    { $set: { status: 'reject'}}
                )
    
       })
    })

    router.post('/customplan',function(req,res){
        console.log(req.body);
        var mealplan = {
            items:req.body.myplan,
            date: req.body.datetime.slice(0,10),
            time: req.body.datetime.slice(11,16),
            status:'Custom Plan'
        }
        console.log(mealplan);
        var MongoClient = require('mongodb').MongoClient;
        MongoClient.connect('mongodb+srv://Aravinth:12345@cluster0.giy9v.mongodb.net/<dbname>?retryWrites=true&w=majority').then(function(client)
            {
                var db=client.db('calorie-table');
                var collection=db.collection("plan");
                return collection.insertOne(mealplan);
                
            }).then(function(items){
                // console.log(items);
            })
    })
    


module.exports=router;
