const mongoose = require('mongoose');
const { Schema } = mongoose;

const Replies = new Schema({
  commentId: String,
  author: String,
  body: String,
},
  {
    collection: 'Replies',
    versionKey: false,
    timestamps: true,
  });

module.exports = mongoose.model('Replies', Replies);