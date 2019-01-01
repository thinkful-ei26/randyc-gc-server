'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const { PORT, CLIENT_ORIGIN } = require('./config');
const { dbConnect } = require('./db-mongoose');
// const {dbConnect} = require('./db-knex');

const Block = require('./models/blocks');
 

const app = express();

app.use(
  morgan(process.env.NODE_ENV === 'production' ? 'common' : 'dev', {
    skip: (req, res) => process.env.NODE_ENV === 'test'
  })
);

app.use(
  cors({
    origin: CLIENT_ORIGIN
  })
);


//GET ALL
app.get('/blocks',(req,res) => {

  res.json({

    days : [

      'January 1',
      'January 2',
      'January 3',
      'January 4',
      'January 5'
 
    ]



  });


});

//GET BY ID


//POST-CREATE
app.post('/', (req,res) => {

  const { userId, startDate, endDate } = req.body;

  const newBlock = { userId, startDate, endDate };

  console.log('new block >> ',newBlock);
 

});

//PUT


//DELETE











function runServer(port = PORT) {
  const server = app
    .listen(port, () => {
      console.info(`App listening on port ${server.address().port}`);
    })
    .on('error', err => {
      console.error('Express failed to start');
      console.error(err);
    });
}

if (require.main === module) {
  dbConnect();
  runServer();
}

module.exports = { app };
