import axios from "axios";

const API_URL = "http://localhost:3000/";

const getAllBlogs = () => {
  return axios.get(API_URL + "blog/");
};

const getBlogById = (id) => {
  return axios.get(`${API_URL}blog/${id}`);
};

const create = (author, title, body) => {
  return axios.post(API_URL + "blog/", { title, body, author });
};

const addComment = (blogId, body, author) => {
  return axios.post(API_URL + "comment/", { blogId, body, author });
};

const addReply = (commentId, body, author) => {
  return axios.post(API_URL + "reply/", { commentId, body, author });
};

export default {
  getAllBlogs,
  create,
  addComment,
  addReply,
  getBlogById
};