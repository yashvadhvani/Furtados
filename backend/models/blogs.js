const dbModel = require('../models/index')
const BlogSchema = require('../models/schemas/Blog');

const edit = async (blogId, author, body) => dbModel.findOneAndUpdateWithOptions(BlogSchema, { _id: blogId }, {
  title, author, body
}, { upsert: true, new: true });

const create = async (author, body, title) => dbModel.save(
  BlogSchema,
  { author, body, title }
);

const deleteBlog = (blogId) => dbModel.findOneAndUpdate(BlogSchema, { _id: blogId }, {
  hidden: true,
});

const fetchAll = () => dbModel.find(BlogSchema, {}).populate({
  path : 'comments',
  populate : {
    path : 'replies',
    model: 'Replies'
  }
});

const fetchOne = (blogId) => dbModel.findOne(BlogSchema, { _id: blogId }).populate({
  path : 'comments',
  populate : {
    path : 'replies',
    model: 'Replies'
  }
});

const insertComment = (blogId, commentID) => dbModel.findOneAndUpdate(BlogSchema, { _id: blogId },
  { $push: { comments: commentID } }
);

module.exports = {
  edit,
  create,
  deleteBlog,
  fetchAll,
  fetchOne,
  insertComment
}