'use strict';

const express = require('express');
const Router = express.Router();
//const store = require('./store');
const { User } = require('../models/users');

//GET ALL users
Router.get('/', (req,res, next)=>{

  User.find().then((data)=>res.json(data));

});

Router.post('/',(req,res,next)=>{

  console.log('test>>> ', req.body);

  //const { name } = req.body;

  //User.create({name: name});

});




module.exports = Router;