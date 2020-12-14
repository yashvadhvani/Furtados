const dbModel = require('../models/index')
const CommentsSchema = require('../models/schemas/Comments');

const edit = (commentId, author, body) => dbModel.findOneAndUpdateWithOptions(CommentsSchema, { _id: commentId }, {
    author, body
}, { upsert: true, new: true });

const create = (blogID, author, body) => dbModel.save(
    CommentsSchema,
    { blogID, author, body }
);

const insertReplies = (commentId, replyID) => dbModel.findOneAndUpdate(CommentsSchema, { _id: commentId },
    { $push: { replies: replyID } }
);

module.exports = {
    edit,
    create,
    insertReplies
} 