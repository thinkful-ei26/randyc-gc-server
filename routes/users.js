'use strict';

const express = require('express');
const Router = express.Router();
//const store = require('./store');
const { User } = require('../models/users');

//GET ALL users
Router.get('/', (req,res, next)=>{

  User.find().then((data)=>{
    
    res.json(data);
  
  });

});

//GET users by id
Router.get('/id', (req,res, next)=>{
 
  User.findById(req.params._id).then((data)=>res.json(data));

});


//POST--CREATE
Router.post('/',(req,res,next)=>{

  const { name } = req.body;

  console.log('test>>> ', name);

  //const { name } = req.body;

  User.create({name: name});

});




module.exports = Router;