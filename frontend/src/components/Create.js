import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import Textarea from "react-validation/build/textarea";

import { create } from "../actions/blog"; 


const Create = (props) => {
  const dispatch = useDispatch();
  const { user: currentUser } = useSelector((state) => state.auth);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const form = useRef();

  const onChangeTitle = (e) => {
    const title = e.target.value;
    setTitle(title);
  };

  const onChangeBody = (e) => {
    const body = e.target.value;
    setBody(body);
  };

  const handleCreate = (e) => {
    e.preventDefault();

    form.current.validateAll();

    dispatch(create(currentUser.username, title, body))
      .then(() => {
        props.history.push("/home");
        window.location.reload();
      })
      .catch(() => {
        props.history.push("/home");
        window.location.reload();
      });
  };


  return (
    <Form onSubmit={handleCreate} ref={form}>
      <div className="form-group">
        <label htmlFor="blogTitle">Blog Title</label>
        <Input onChange={onChangeTitle}
          value={title}

          className="form-control" id="txtTitle" aria-describedby="titleHelp" placeholder="Enter Title" />
        <label htmlFor="blogTitle">Blog Body</label>
        <Textarea
          value={body}

          onChange={onChangeBody} className="form-control" id="txtBody" placeholder="Write your thoughts" rows="4"></Textarea>
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </Form>
  );
};

export default Create;
