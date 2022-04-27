import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
const Book = ({ title, image, category, button }) => {
  return (
    <Card
      style={{ maxHeight: "500px", maxWidth: "200px" }}
      className="  m-2 bg-light   "
    >
      <Card.Img
        variant="top"
        src={image}
        className=" align-self-center"
        style={{ objectFit: "cover", height: "310px", width: "190px" }}
      />
      <Card.Body className="container" style={{}}>
        <Card.Title
          style={{
            fontSize: "15px",
          }}
        >
          {title}
        </Card.Title>
        <Card.Text>{category}</Card.Text>
        <Button
          style={{ position: "relative", bottom: "10px" }}
          variant="warning"
        >
          Add to cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Book;
