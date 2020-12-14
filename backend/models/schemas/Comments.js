const mongoose = require('mongoose');
const { Schema } = mongoose;

const Comments = new Schema({
  blogID: String,
  author: String,
  body: String,
  replies: [{ type: Schema.Types.ObjectId, ref: 'Replies' }],
},
{
  collection: 'Comments',
  versionKey: false,
  timestamps: true,
});

module.exports = mongoose.model('Comments', Comments);