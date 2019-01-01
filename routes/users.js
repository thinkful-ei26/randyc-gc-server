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




//POST--CREATE user
Router.post('/',(req,res, next)=>{

  /***** Never trust users - validate input *****/
  let { name } = req.body; 

  console.log('test>>> ', name);

  const newUser = {

    name: name

  }

    .then(name => {
      
      const newUser = {
        name
      };

      return User.create(newUser);
    
    });

});




module.exports = Router;