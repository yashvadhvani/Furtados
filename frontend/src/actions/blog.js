import {
  SET_MESSAGE,
  ADD_BLOG,
  ADD_COMMENT,
  ADD_REPLY,
  SET_INITIAL
} from "./types";

import blogService from "../services/blog.service";

export const create = (username, title, body) => (dispatch) => {
  return blogService.create(username, title, body).then(
    (response) => {
      dispatch({
        type: ADD_BLOG,
        payload: response.data,
      })
      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const addReply = (commentId, body, author) => (dispatch) => {
  return blogService.addReply(commentId, body, author).then(
    (response) => {
      dispatch({
        type: ADD_REPLY,
        payload: response.data,
      })
      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const addComment = (blogId, body, author) => (dispatch) => {
  return blogService.addComment(blogId, body, author).then(
    (response) => {
      dispatch({
        type: ADD_COMMENT,
        payload: response.data,
      })
      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};


export const init = () => (dispatch) => {
  return blogService.getAllBlogs().then(
    (response) => {
      dispatch({
        type: SET_INITIAL,
        payload: response.data,
      })
      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};