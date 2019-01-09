'use strict';
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const userSchema = new mongoose.Schema({
   
  userName: { type: String, required: true, unique: true },
  password: { type: String, required: true},
  firstName: { type: String, default: ''},
  lastName: { type: String, default: ''}
  
});

userSchema.methods.serialize = function() {

  return {

    userName: this.userName || '',
    firstName: this.firstName || '',
    lastName: this.lastName || ''
 
  };

};

 
const User = mongoose.model('User', userSchema);

module.exports = { User };

//later
// username: {type: String, required: true },
// password: {type: String, required: true }

//MULTI_USER!