import React, { Component } from "react";
import horror from "../Data/horror.json";
import OneCard from "./OneCard";

const LatestRelease = ({ books, selectBook }) => {
  return (
    <div>
      <div className=" jumbotron-fluid bg-dark"></div>
      <div>
        <h1 className="text-white latest-release">Latest Release</h1>
      </div>
      <div className="container">
        <div className="row">
          {books.map((book) => (
            <OneCard
              title={book.title}
              category={book.category}
              image={book.img}
              key={book.asin}
              price={book.price}
              asin={book.asin}
              // homework
              selectBook={selectBook}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestRelease;
