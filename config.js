'use strict';

// module.exports = {
//   PORT: process.env.PORT || 8080,
//   CLIENT_ORIGIN: process.env.CLIENT_ORIGIN || 'http://localhost:3000',
//   DATABASE_URL: process.env.DATABASE_URL || 'mongodb://robot9999:zebra999@ds145694.mlab.com:45694/goodcalldb',
//   TEST_DATABASE_URL: process.env.TEST_DATABASE_URL || 'mongodb://localhost/thinkful-backend-test',
//   JWT_SECRET: process.env.JWT_SECRET,
//   JWT_EXPIRY: process.env.JWT_EXPIRY || '7d'
// };

exports.CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || 'https://goodcall.herokuapp.com/';
exports.DATABASE_URL = process.env.DATABASE_URL || 'mongodb://robot9999:zebra999@ds145694.mlab.com:45694/goodcalldb';
exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL || 'mongodb://localhost/jwt-auth-demo';
exports.PORT = process.env.PORT || 8080;
exports.JWT_SECRET = process.env.JWT_SECRET;
exports.JWT_EXPIRY = process.env.JWT_EXPIRY || '7d';








//'mongodb://localhost/thinkful-backend' <--- no internet testing

//'mongodb://robot9999:zebra999@ds145694.mlab.com:45694/goodcalldb' <--- switch back to mlab!