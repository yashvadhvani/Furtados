const repliesModel = require('../models/reply');

const add = (commentId, author, body) => repliesModel.create(commentId, author, body);
const update = (replyId, author, body) => repliesModel.edit(replyId, author, body);

module.exports = {
    add,
    update
}