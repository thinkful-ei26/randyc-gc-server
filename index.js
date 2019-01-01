'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const { PORT, CLIENT_ORIGIN } = require('./config');
const { dbConnect } = require('./db-mongoose');
// const {dbConnect} = require('./db-knex');

const User = require('./models/users');

const userRouter = require('./routes/users');

const app = express();

app.use(express.json());

//app.use(express.bodyParser());

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

//ROUTERS

//USERS
app.use('/users', userRouter);




// // //GET ALL Blocks
// app.get('/',(req,res) => {

// //   // res.json({

// //   //   blocks : [

// //   //     {
// //   //       userId: 1,
// //   //       startDate: 'December 31, 2018 4:30 PM',
// //   //       endDate: 'December 31, 2018 5:30 PM'
// //   //     },
// //   //     {
// //   //       userId: 2,
// //   //       startDate: 'January 1, 2019 1:30 PM',
// //   //       endDate: 'January 1, 2018 2:30 PM'
 
// //   //     } 
 
// //   //   ]



// //   // });

//   User.find()
//     .then(results => {

//       res.json(results);

//     });


// });

// //GET BY ID


// //POST-CREATE
// app.post('/post/', (req,res) => {

//   console.log('new block >> ',req.body);

//   // const { userId, startDate, endDate } = req.body;

//   // const newBlock = { userId, startDate, endDate };

//   // console.log('new block >> ',newBlock);
 

// });

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
