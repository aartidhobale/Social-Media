import React, { useContext } from "react";
import Post from "./Post";
import { PostListContext } from "../store/post-list-store"; 
import WelcomeMesg from "./WelcomeMesg";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListContext); 

  const handleGetPostsClick = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
      });
  };

  return (
    <>
      {postList.length === 0 && (
        <WelcomeMesg onGetPostsClick={handleGetPostsClick} />
      )}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
