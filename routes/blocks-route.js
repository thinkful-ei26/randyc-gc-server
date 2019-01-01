'use strict';

const express = require('express');
const Router = express.Router();
const { Block } = require('../models/blocks');

//Get all BLOCKS -- testing
Router.get('/get', (req,res,next)=>{

  Block.find()
    .then((data)=>{

      res.json(data);

    });

});

//Get all BLOCKS by user ID
Router.get('/getBlock/:id', (req,res,next)=>{

  const findId = req.params.id;

  Block.find({userRef : findId})
    .then((data)=>{

      return res.json(data);

    });


});

//Post--Create a block
Router.post('/post',(req,res,next)=>{

  const startDateInput = req.body.startDate;
  const endDateInput = req.body.endDate;
  const userRefInput = req.body.userRef;

  const newBlock = {

    userRef: userRefInput,
    startDate: startDateInput,
    endDate: endDateInput


  };

  Block.create(newBlock)
    .then((data)=>{

      res.json(data);
 
    });

});

//PUT--edit by ID by its ID and user ID
Router.put('/put/:id',(req,res,next)=>{

  const blockId = req.params.id;
  //const userRef = req.body.userRef;
  const updateStartDate = req.body.startDate;
  const updateEndDate = req.body.endDate;

  const blockUpdate = {
 
    startDate: updateStartDate,
    endDate: updateEndDate

  };

  Block.findOneAndUpdate({_id: blockId}, blockUpdate, {new: true})
    .then((data)=>{

      res.json(data);

    });
 

});

//DELETE
Router.delete('/delete/:id',(req,res,next)=>{

  const findById = req.params.id;

  Block.findByIdAndRemove({_id : findById})
    .then((data)=>{

      res.sendStatus(204);
      console.log('gone!');
      return res.json(data);


    });



});


module.exports = Router;