'use strict';

const mongoose = require('mongoose');

const blockSchema = new mongoose.Schema({
  
  userRef: {type: String, required: true},
  startDate: {type: String, required: true },
  endDate: {type: String, required: true }

});


const Block = mongoose.model('Block', blockSchema);

module.exports = { Block };

//Need to add a title to the block schema