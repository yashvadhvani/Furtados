import React from 'react'
import moment from 'moment';


export default function Reply({ author, body, time}) {
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
        </div>
      </div>
    </div>
  )
}
