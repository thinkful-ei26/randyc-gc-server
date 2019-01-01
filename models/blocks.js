'use strict';

const mongoose = require('mongoose');

const blockSchema = new mongoose.Schema({
  
  userId: {type: String},
  startDate: {type: String, required: true },
  endDate: {type: String, required: true }

});


const Block = mongoose.model("Block", blockSchema);

module.exports = { Block };


// year: {type: Number, required: true },
//   month: {type: String, required: true },
//   day: {type: Number, required: true },
//   dayName: {type: String, required: true },