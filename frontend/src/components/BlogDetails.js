import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import moment from 'moment';

import blogService from "../services/blog.service";
import Comment from './Comment'
import { addComment } from "../actions/blog";



export default function BlogDetails(props) {
  const [content, setContent] = useState({});
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();


  const { user: currentUser } = useSelector((state) => state.auth);

  const blogId = props.match.params.id;
  useEffect(() => {
    blogService.getBlogById(blogId).then(
      (response) => {
        console.log(response.data)
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  const onChangeComment = (e) => {
    const comment = e.target.value;
    setComment(comment);
  };


  const postComment = (e) => {
    e.preventDefault();
    if (comment !== '') {
      dispatch(addComment(blogId, comment, currentUser.username))
        .then(() => {
          props.history.push("/home");
        })
        .catch(() => {
          alert("Error in adding Comment")
        });
    } else {
      alert("Not able to post comment")
    }
  };

  return (
    <div className="container">
      <div className="col-md-12">
        <div className="panel panel-default">
          <div className="panel-body">
            <section className="post-heading">
              <div className="row">
                <div className="col-md-11">
                  <div className="media">
                    <div className="media-left">
                      <a href="#">
                        <img className="media-object photo-profile" src="http://0.gravatar.com/avatar/38d618563e55e6082adf4c8f8c13f3e4?s=40&d=mm&r=g" width="40" height="40" alt="..." />
                      </a>
                    </div>
                    <div className="media-body">
                      <a href="#" className="anchor-username"><h4 className="media-heading">{content.title}</h4></a>
                      <a href="#" className="anchor-time">{moment(content.updatedAt).fromNow()}</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-1">
                  <a href="#"><i className="glyphicon glyphicon-chevron-down"></i></a>
                </div>
              </div>
            </section>
            <section className="post-body">
              <p>{content.body}</p>
            </section>
            <section className="post-footer">
              <hr />
              <div className="post-footer-comment-wrapper">
                <div className="comment-form">
                  <textarea className="form-control" onChange={onChangeComment} id="txtComment" rows="1"></textarea>
                  <button onClick={postComment} className="btn btn-primary mb-2">Add Comment</button>
                </div>

                {content.comments && content.comments.map((comment) => <Comment body={comment.body} author={comment.author} 
                time={comment.updatedAt} id= {comment._id} replies= {comment.replies}
                key={comment._id}></Comment>)}

              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
