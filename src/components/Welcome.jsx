import React, { Component } from "react";
import { Button } from "react-bootstrap";

const Welcome = () => {
  return (
    <div>
      <div className="jumbotron text-white">
        <h1 className="display-4">Welcome in the world of the books!</h1>
        <p className="lead">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>

        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <Button className="more">Learn More</Button>
      </div>
    </div>
  );
};

export default Welcome;
