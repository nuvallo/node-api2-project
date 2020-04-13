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

  const id = null;

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

    axios
      .get(`http://localhost:4000/api/posts/${id}/comments`)
      .then((res) => {
        console.log("Comments:", res.data);
        setComments(res.data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, []);

  return (
    <div className="App">
      <Route path="/" component={Navigation} />
      <Route exact path="/" render={() => <Home posts={posts} />} />
      <Route path="/about" component={About} />
    </div>
  );
}

export default App;
