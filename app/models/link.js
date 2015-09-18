var crypto = require('crypto');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create schemas and models
var urlSchema = new Schema({
  url: String,
  base_url: String,
  code: String,
  title: String,
  visits: Number
});

var Url = mongoose.model('Url', urlSchema);

urlSchema.pre('save', function(next){
  var shasum = crypto.createHash('sha1');
  shasum.update(this.url);
  this.code = shasum.digest('hex').slice(0, 5);
  next();
});

module.exports = Url;
