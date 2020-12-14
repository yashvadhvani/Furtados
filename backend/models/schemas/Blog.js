const mongoose = require('mongoose');
const { Schema } = mongoose;

const Blog = new Schema({
  title: String, // String is shorthand for {type: String}
  author: String,
  body: String,
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comments' }],
  hidden: { type: Boolean, default: false }
}, {
  collection: 'Blog',
  versionKey: false,
  timestamps: true,
});

module.exports = mongoose.model('Blog', Blog);