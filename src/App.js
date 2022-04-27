import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import LatestRelease from "./components/LatestRelease";
import { Col, Row } from "react-bootstrap";
import CommentArea from "./components/CommentArea";
import horror from "./Data/horror.json";

const App = () => {
  const books = horror.slice(0, 115);

  const [asinSelected, setAsinSelected] = useState(null);
  const [colDisplay, setColDisplay] = useState("d-none");
  const [data, setData] = useState([]);
  const [comments, setComments] = useState([]);
  const [commentToDelete, setCommentToDelete] = useState(null);

  const [newComment, setNewComment] = useState({
    rate: null,
    comment: "",
    elementId: null,
  });

  const selectBook = (asin) => {
    setAsinSelected(asin);
    setColDisplay("d-block");
    if (colDisplay === "d-block" && asinSelected === asin) {
      setColDisplay("d-none");
    }
  };

  const getCommentRate = (rate) => {
    console.log("Rate :", rate);
    setNewComment({ ...newComment, rate: rate, elementId: asinSelected });
  };

  const getCommentText = (text) => {
    console.log("Comment: ", text);
    setNewComment({ ...newComment, comment: text, elementId: asinSelected });
  };

  const fetchData = async () => {
    try {
      if (asinSelected) {
        let response = await fetch(
          `https://striveschool-api.herokuapp.com/api/comments/${asinSelected}`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwOWZmNTRjZmY1ZjAwMTU5MGJkYWUiLCJpYXQiOjE2NTA2MzkyOTAsImV4cCI6MTY1MTg0ODg5MH0.7Nkan4-wzQ92nOq0FpNIvxiCPAJYIAQpdk2j0qrDOMg",
            },
          }
        );

        if (response.ok) {
          response = await response.json();

          console.log(response);
          setComments(response);
          console.log("CDM");
        }
      } else {
        console.log("No Asin");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const onDeleteComment = async (commentId) => {
    try {
      const data = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${commentId}`,
        {
          method: "DELETE",

          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwOWZmNTRjZmY1ZjAwMTU5MGJkYWUiLCJpYXQiOjE2NTA2NjM3MDYsImV4cCI6MTY1MTg3MzMwNn0.t-bhGh4Ste0C-qGe1NWOGB8jhgMqxJtbscKzTT-wrio",
            "Content-type": "application/json",
          },
        }
      );
      if (data.ok) {
        console.log("Comment Deleted!");
        fetchData();
      }
    } catch (error) {
      console.log("❌There is an error: ", error);
    }
    console.log("Something happened!");
  };

  // componentDidUpdate = async (prevProps, PrevState) => {
  //   if (PrevState.asinSelected !== this.state.asinSelected) {
  //     await this.fetchData();
  //   }
  //   if (PrevState.commentToDelete !== this.state.commentToDelete) {
  //     console.log("delete ");
  //     await this.onDeleteComment(this.state.commentToDelete);
  //     await this.fetchData();
  //   }
  //   if (PrevState.comments !== this.state.comments) {
  //     console.log("fetch! New Data!");
  //   } else {
  //     console.log("no fetch");
  //   }
  // };

  useEffect(() => {
    fetchData();
  }, [asinSelected]);

  useEffect(() => {
    setData(books);
  }, []);

  const onPostComment = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          body: JSON.stringify(newComment),
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwOWZmNTRjZmY1ZjAwMTU5MGJkYWUiLCJpYXQiOjE2NTA2NjM3MDYsImV4cCI6MTY1MTg3MzMwNn0.t-bhGh4Ste0C-qGe1NWOGB8jhgMqxJtbscKzTT-wrio",
            "Content-type": "application/json",
          },
        }
      );
      if (response.ok) {
        response = await response.json();
        console.log("✅ You just posted");

        fetchData();
      }
    } catch (error) {
      console.log("❌There is an error: ", error);
    }
  };

  return (
    <div className="App">
      <MyNav className="navbar navbar-light bg-light" />
      <Welcome />
      <Row>
        <Col>
          <LatestRelease books={data} selectBook={selectBook} />
        </Col>
        <Col lg={4} className={colDisplay}>
          <div>
            <CommentArea
              onPostComment={onPostComment}
              comments={comments}
              onDelete={onDeleteComment}
              getCommentRate={getCommentRate}
              getCommentText={getCommentText}
            />
          </div>
        </Col>
      </Row>
      <MyFooter />
    </div>
  );
};

export default App;
