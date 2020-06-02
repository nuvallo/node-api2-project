import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const Searchbar = () => {
  let history = useHistory();

  const searchHandler = (event) => {
    event.preventDefault();
  };

  const directPostForm = (event) => {
    event.preventDefault();
    history.push("/newPost");
  };

  return (
    <Form className="search-bar">
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label hidden for="search" className="mr-sm-2">
          Search
        </Label>
        <Input
          type="search"
          name="search"
          id="search"
          placeholder="Search blogs"
        />
      </FormGroup>
      <Button onClick={searchHandler}>Search</Button>
      <Button onClick={directPostForm}>Create post</Button>
    </Form>
  );
};

export default Searchbar;
