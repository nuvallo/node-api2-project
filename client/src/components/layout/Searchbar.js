import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const Searchbar = () => {
  return (
    <Form className="search-bar" inline>
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
      <Button>Search</Button>
      <Button>Create post</Button>
    </Form>
  );
};

export default Searchbar;
