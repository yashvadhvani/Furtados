import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from 'moment';

import Reply from './Reply';
import { addReply } from "../actions/blog";


export default function Comment({ author, body, time, id , replies }) {
  const [reply, setReply] = useState('');
  const dispatch = useDispatch();

  const onChangeReply = (e) => {
    const repl = e.target.value;
    setReply(repl);
  };


  const postReply = (e) => {
    e.preventDefault();
    if (reply !== '') {
      dispatch(addReply(id, reply, author))
        .then(() => {
          // props.history.push("/home");
        })
        .catch(() => {
          alert("Error in adding Comment")
        });
    } else {
      alert("Not able to post comment")
    }
  };
  return (
    <div className="comment">
      <div className="media">
        <div className="media-left">
          <a href="#">
            <img className="media-object photo-profile" src="http://0.gravatar.com/avatar/38d618563e55e6082adf4c8f8c13f3e4?s=40&d=mm&r=g" width="32" height="32" alt="..." />
          </a>
        </div>
        <div className="media-body">
          <a href="#" className="anchor-username"><h4 className="media-heading">{author}</h4></a>
          <p className="comment-text">{body}</p>
          <a href="#" className="anchor-time">{moment(time).fromNow()}</a>
          <div className="comment-form">
            <textarea className="form-control" onChange={onChangeReply} rows="1"></textarea>
            <button onClick={postReply} className="btn btn-primary mb-2">Add Reply</button>
          </div>

          {replies && replies.map((reply) => <Reply body={reply.body} author={reply.author} 
            time={reply.updatedAt} id={reply._id}
            key={reply._id}></Reply>)}

        </div>
      </div>
    </div>
  )
}
