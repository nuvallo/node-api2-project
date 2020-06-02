import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const PostForm = ({ newPost }) => {
  const [newPostData, setNewPostData] = useState({
    title: "",
    contents: "",
  });

  let history = useHistory();

  const newPostHandler = (event) => {
    setNewPostData([event.target.value]);
    setNewPostData({ ...newPostData, [event.target.name]: event.target.value });
  };

  const newPostFormSubmit = (event) => {
    event.preventDefault();
    newPost(newPostData);
    history.push("/");
  };

  return (
    <div className="post-form-container">
      <h1>Create a New Post Card</h1>
      <Form>
        <FormGroup>
          <Label for="title">Title</Label>
          <Input
            onChange={newPostHandler}
            type="text"
            name="title"
            id="title"
            placeholder="Enter a title"
          />
        </FormGroup>
        <FormGroup>
          <Label for="content">Content</Label>
          <Input
            onChange={newPostHandler}
            type="text"
            name="contents"
            id="contents"
            placeholder="Enter content"
          />
        </FormGroup>

        <Button onClick={newPostFormSubmit}>Add</Button>
      </Form>
    </div>
  );
};

export default PostForm;
