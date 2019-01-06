'use strict';
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const userSchema = new mongoose.Schema({
   
  name: { type: String, required: true }
  
});


const User = mongoose.model('User', userSchema);

module.exports = { User };

//later
// username: {type: String, required: true },
// password: {type: String, required: true }