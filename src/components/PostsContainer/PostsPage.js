//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import dummyData from '../../dummy-data'
import "./Posts.css";
// import data 

const PostsPage = () => {
  // set up state for your data
  const [data, setData] = useState(dummyData)
  console.log(data)
  return (
    <div className="posts-container-wrapper">
      {data.map((post, index) => {
        return <Post post={post} key={index} />
      })}
      {/* map through data here to return a Post and pass data as props to Post */}
    </div>
  );
};

export default PostsPage;

