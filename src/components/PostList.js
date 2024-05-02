import { useContext } from "react";
import Post from "./Post";

import { PostListContext } from "../store/post-list-store"; // Import the context

const PostList = () => {
    const { postList } = useContext(PostListContext); // Use the context
    return (
        <>
            {postList.map((post) => (
                  <Post key={post.id} post={post} />
            ))}
        </>
    );
};

export default PostList;
