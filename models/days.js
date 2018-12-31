'use strict';

const mongoose = require('mongoose');

const daySchema = mongoose.Schema({
 
  month: {type: String, required: true } 

});


const Day = mongoose.model("Day", daySchema);

module.exports = { Day };


// year: {type: Number, required: true },
//   month: {type: String, required: true },
//   day: {type: Number, required: true },
//   dayName: {type: String, required: true },