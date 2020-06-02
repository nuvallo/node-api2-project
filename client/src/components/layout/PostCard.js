import React, { Fragment } from "react";

import {
  Card,
  CardText,
  CardBody,
  CardSubtitle,
  CardTitle,
  Button,
} from "reactstrap";

const PostCard = ({ post, deletePost }) => {
  const deletePostCard = (event) => {
    event.preventDefault();
    deletePost(post.id);
  };
  return (
    <Fragment>
      <Card className="post-card">
        <CardBody>
          <CardTitle>
            <strong>Title: </strong>
            {post.title}
          </CardTitle>

          <CardText>
            <strong>Content: </strong>
            {post.contents}
          </CardText>
          <CardSubtitle>
            <strong>Date posted: </strong>
            {post.created_at}
          </CardSubtitle>
          <Button>Edit</Button>
          <Button onClick={deletePostCard}>Delete</Button>
        </CardBody>
      </Card>
    </Fragment>
  );
};

export default PostCard;
