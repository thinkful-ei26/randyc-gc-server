'use strict';

const express = require('express');
const Router = express.Router();



const { User } = require('../models/users');
 
 

//GET ALL users -- for testing purposes
Router.get('/get', (req,res, next)=>{
 
  User.find()
    .then((data)=>{
    
      res.json(data);
  
    })
    .catch(err => {

      next(err);

    });

});
  
//GET user by ID
Router.get('/getUser/:id', (req,res, next)=>{

  console.log('finding by this id>>> ',req.params.id);
  
  User.findById(req.params.id)
    .then((data)=>{

      return res.json(data);
 
    });
 
}); 
 
//POST--CREATE user -- Works!
Router.post('/post',(req,res, next)=>{

  console.log('new name to create >>> ',req.body.name);

  const newName = req.body.name;

  const data = {

    name: newName
 
  };
 
  User.create(data)
    .then(data => {

      res.json(data);

    });
    
     

});

//PUT--edit by ID
Router.put('/put/:id',(req,res,next) =>{

  const findById = req.params.id;
  const newName = req.body.name;

  console.log('change this name >>> ',findById,' to this name >>> ',newName);

  User.findOneAndUpdate({_id: findById}, {name: newName}, {new: true})
    .then(data =>{

      return res.json(data);

    });



});
 
//DELETE by ID works!
Router.delete('/delete/:id',(req,res,next)=>{

  const findId = req.params.id;

  console.log('this id>>> ',req.params.id);

  User.findByIdAndRemove({ _id: findId })
    .then(data => {
 
      res.sendStatus(204);
      console.log('gone!');
      return res.json(data);
 
    });
 
});

module.exports = Router;