// post-list-store.js

import { type } from "@testing-library/user-event/dist/type";
import { createContext, useReducer } from "react";

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hi Friends, I am going to Mumbai for my vacations. Hope to enjoy a lot. Pease out.",
    reactions: 2,
    userId: "user-9",
    tags: ["vacations","Mumbai","Enjoying"],
  },
  {
    id: "2",
    title: "After Engineering Completed",
    body: "Hard to believe.",
    reactions: 15,
    userId: "user-12",
    tags: ["Graduating","Unbelievable","Enjoying"],
  },
];

export const PostListContext = createContext({
  postList: DEFAULT_POST_LIST,
  addPost: () => {},
  deletePost: () => {},

});

const postListProvider = (currPostList, action) => {
  let newPostList = [...currPostList]; // Create a new array instead of mutating the current one
  if (action.type === 'DELETE_POST') {
    newPostList = currPostList.filter(post => post.id !== action.payload.postId);
  } else if (action.type === 'ADD_POST') {
    newPostList  = [action.payload, ...currPostList]
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListProvider, DEFAULT_POST_LIST);

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
        type: 'ADD_POST',
        payload: {
            id: Date.now(),
             title: postTitle,
              body: postBody,
               reactions: reactions,
                userId: userId,
                 tags: tags,
        }
    })
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostListContext.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;
