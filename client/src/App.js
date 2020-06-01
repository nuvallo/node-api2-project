import React, { useState, useEffect } from "react";
import { Route } from "react-browser-router";
import axios from "axios";
import Navigation from "./components/layout/Navigation";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

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
    axios
      .delete(`http://localhost:4000/api/posts/${id}`)
      .then(window.location.reload())
      .catch((err) => console.log("Did not delete post: ", err));
  };

  const id = null;

  return (
    <div className="App">
      <Route path="/" component={Navigation} />
      <Route
        exact
        path="/"
        render={() => <Home posts={posts} deletePost={deletePost} />}
      />
      <Route path="/about" component={About} />
    </div>
  );
}

export default App;
