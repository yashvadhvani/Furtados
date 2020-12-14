import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { init } from "../actions/blog";
import HomeListItem from "./HomeListItem";



const Home = (props) => {
  const dispatch = useDispatch();
  const blog = useSelector(state => state.blog);
  useEffect(() => {
    dispatch(init())
      .then(() => {
      })
      .catch(() => {
      });
  }, []);

  return (
    <div className="list-group">
      {Object.values(blog).map((item) => <HomeListItem history= {props.history} key={item._id} id={item._id} title={item.title} body={item.body} author={item.author} time={item.updatedAt}></HomeListItem>)}
    </div>)
};

export default Home;
