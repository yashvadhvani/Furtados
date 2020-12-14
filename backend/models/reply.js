const dbModel = require('../models/index')
const RepliesSchema = require('../models/schemas/Replies');

const edit = async (replyId, author, body) => dbModel.findOneAndUpdateWithOptions(RepliesSchema, { _id: replyId }, {
  author, body
}, { upsert: true, new: true });

const create = async (commentId, author, body) => dbModel.save(
  RepliesSchema,
  { commentId, author, body }
);

module.exports = {
  edit,
  create
} 