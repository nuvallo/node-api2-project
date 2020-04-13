import React, { Fragment } from "react";
import PostCard from "../layout/PostCard";
import Searchbar from "../layout/Searchbar";

const Home = ({ posts }) => {
  return (
    <Fragment>
      <Searchbar />
      <div className="post-card-container">
        {posts.map((post) => {
          return <PostCard post={post} key={post.id} />;
        })}
      </div>
    </Fragment>
  );
};

export default Home;
