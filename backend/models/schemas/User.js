const mongoose = require('mongoose');
const { Schema } = mongoose;

const User = new Schema({
	username: String,
	email: String,
	password: String,
},
  {
    collection: 'User',
    versionKey: false,
    timestamps: true,
  });

module.exports = mongoose.model('User', User);