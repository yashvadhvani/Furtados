const blogsModel = require('../models/blogs');
const commentController = require('./comment');

const add = (author, body, title) => blogsModel.create(author, body, title);
const update = (blogId, author, body) => blogsModel.edit(blogId, author, body);
const deleteBlog = (blogId) => blogsModel.deleteBlog(blogId)

const addComment = async (blogId, author, body) => {
    const comment = await commentController.add(blogId, author, body);
    await blogsModel.insertComment(blogId, comment._id);
    return comment;
}

const getAll = () => blogsModel.fetchAll();
const getOne = (blogId) => blogsModel.fetchOne(blogId)

module.exports = {
    add,
    update,
    deleteBlog,
    addComment,
    getAll,
    getOne
}