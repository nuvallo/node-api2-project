import React, { useState, useEffect } from "react";
import { Route } from "react-browser-router";
import axios from "axios";
import Navigation from "./components/layout/Navigation";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import "./App.css";
import PostForm from "./components/layout/PostForm";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/posts")
      .then((res) => {
        console.log("Posts:", res.data);
        setPosts(res.data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, []);

  const deletePost = (id) => {
    try {
      axios
        .delete(`http://localhost:4000/api/posts/${id}`)
        .then(window.location.reload());
    } catch (error) {
      console.log("Could not delete post: ", error);
    }
  };

  const newPost = (data) => {
    try {
      axios.post("http://localhost:4000/api/posts/", data).then(() => {
        window.location.reload();
      });
    } catch (error) {
      console.log("Could not add post: ", error);
    }
  };

  return (
    <div className="App">
      <Route path="/" component={Navigation} />
      <Route
        exact
        path="/"
        render={() => <Home posts={posts} deletePost={deletePost} />}
      />
      <Route path="/about" component={About} />
      <Route path="/newPost" render={() => <PostForm newPost={newPost} />} />
    </div>
  );
}

export default App;
