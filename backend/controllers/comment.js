const commentsModel = require('../models/comments');
const replyController = require('./reply');

const add = (blogId, author, body) => commentsModel.create(blogId, author, body);
const update = (blogId, author, body) => commentsModel.edit(blogId, author, body)
const addReply = async (commentId, author, body) => {
    const reply =  await replyController.add(commentId, author, body);
    const comment = await commentsModel.insertReplies(commentId, reply._id)
    return {
        ...reply,
        blogID: comment.blogID
    }
}

module.exports = {
    add,
    update,
    addReply
}