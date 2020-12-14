import React from "react";
import moment from 'moment'

const HomeListItem = ({ title, body, author, time, id, history}) => {
  const handleClick = () => {
    history.push(`/blog/${id}`)
  }
  return (
    <div className="list-group-item list-group-item-action flex-column align-items-start" onClick={handleClick}>
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{title}</h5>
        <small className="text-muted">{moment(time).fromNow()}</small>
      </div>
      <p className="mb-1">{body}</p>
      <small className="text-muted">{author}</small>
    </div>);
};

export default HomeListItem;
