import {
  SET_INITIAL,
  ADD_BLOG,
  ADD_COMMENT,
  ADD_REPLY,
} from "../actions/types";


export default function (state = {}, action) {
  const { type, payload } = action;
  console.log(payload)
  const newState = { ...state }
  switch (type) {
    case ADD_BLOG: {
      const blog_id = payload._id;
      return {
        ...newState,
        [blog_id]: payload,
      };
    }
    case ADD_COMMENT: {
      const blog_id = payload.blogID;
      newState[blog_id].comments[payload._id] = payload;
      return newState;
    }
    case ADD_REPLY: {
      const blog_id = payload.blogId;
      const comment_id = payload.commentId;
      newState[blog_id].comments[comment_id].replies[payload._id] = payload;
      return newState;
    }
    case SET_INITIAL:
      return payload.reduce((prev, element) => {
        prev[element._id] = element;
        return prev;
      }, {})
    default:
      return state;
  }
}
