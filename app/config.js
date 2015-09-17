///////////////
// Mongoose  //
///////////////
var _ = require('underscore');
var mongoose = require('mongoose');
var userModel = require('./models/user');
var linkModel = require('./models/link');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:8080');
var db = mongoose.connection;
  
var urlSchema = new Schema({
  url: String,
  base_url: String,
  code: String,
  title: String,
  visits: Number
  // TODO: add timestamp
});

var userSchema = new Schema({
  username: { type: String, unique: true },
  password: String
  // TODO: add timestamp
});


var User = mongoose.model('User', userSchema);
var Url = mongoose.model('Url', urlSchema);

_.extend(User, userModel.User);


module.exports = db;


// var options = {
//   db: { native_parser: true },
//   server: { poolSize: 5 },
//   replset: { rs_name: 'myReplicaSetName' },
//   user: 'your_database_user',
//   pass: 'password'
// }
// va db = mongoose.connect(uri, options);

///////////////
// Bookshelf //
///////////////

// var Bookshelf = require('bookshelf');
// var path = require('path');

// var db = Bookshelf.initialize({
//   client: 'sqlite3',
//   connection: {
//     host: '127.0.0.1',
//     user: 'your_database_user',
//     password: 'password',
//     database: 'shortlydb',
//     charset: 'utf8',
//     filename: path.join(__dirname, '../db/shortly.sqlite')
//   }
// });

// db.knex.schema.hasTable('urls').then(function(exists) {
//   if (!exists) {
//     db.knex.schema.createTable('urls', function (link) {
//       link.increments('id').primary();
//       link.string('url', 255);
//       link.string('base_url', 255);
//       link.string('code', 100);
//       link.string('title', 255);
//       link.integer('visits');
//       link.timestamps();
//     }).then(function (table) {
//       console.log('Created Table', table);
//     });
//   }
// });

// db.knex.schema.hasTable('users').then(function(exists) {
//   if (!exists) {
//     db.knex.schema.createTable('users', function (user) {
//       user.increments('id').primary();
//       user.string('username', 100).unique();
//       user.string('password', 100);
//       user.timestamps();
//     }).then(function (table) {
//       console.log('Created Table', table);
//     });
//   }
// });

