import React, { Fragment } from "react";
import PostCard from "../layout/PostCard";
import Searchbar from "../layout/Searchbar";

const Home = ({ posts, deletePost }) => {
  return (
    <Fragment>
      <Searchbar />
      <div className="post-card-container">
        {posts.map((post) => {
          return <PostCard post={post} key={post.id} deletePost={deletePost} />;
        })}
      </div>
    </Fragment>
  );
};

export default Home;
