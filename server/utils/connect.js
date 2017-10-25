// /*eslint-disable*/
// const mongoose = require('mongoose');
// mongoose.Promise = Promise;

// const DB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/gongfucha-v2';
// mongoose.connect(DB_URI);

// mongoose.connection.on('connected', () => {
//   console.log('Mongoose default connection open at ' + DB_URI);
// });

// mongoose.connection.on('error', function (err) {
//   console.log('Mongoose default connection error:' + err);
// });

// mongoose.connection.on('disconnected', function () {
//   console.log('Mongoose default connection disconnected');
// });

// process.on('SIGNIT', function () {
//   mongoose.connection.close('disconnected', function () {
//     console.log('Mongoose default connection disconnected through app terminal');
//     process.exit(0);
//   });
// });