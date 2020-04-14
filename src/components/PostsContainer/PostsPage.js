//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from '../../dummy-data'
// import data 

const PostsPage = () => {
  // set up state for your data
  // console.log("in PostPage component")
  const [post, setData] = useState(dummyData)
  console.log(post);
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {post.map(post => {
        return <Post key = { post.username } post = { post } />
      })}
    </div>
  );
};

export default PostsPage;

