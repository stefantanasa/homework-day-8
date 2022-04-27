import React from "react";
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
  // state = {
  //   asinSelected: null,
  //   colDisplay: "d-none",
  //   data: [],
  //   comments: [],
  //   commentToDelete: null,
  //   posted: false,
  //   newComment: { rate: null, comment: "", elementId: null },
  // };
  books = horror.slice(0, 115);

  const [asinSelected, setAsinSelected] = useState(null);
  const [colDisplay, setColDisplay] = useState("d-none");
  const [data, setData] = useState([]);
  const [comments, setComments] = useState([]);
  const [commentToDelete, setCommentToDelete] = useState(null);
  const [posted, setPosted] = useState(false);
  const [newComment, setNewComment] = useState({
    rate: null,
    comment: "",
    elementId: null,
  });

  selectBook = (asin) => {
    console.log("OK, works! asin: ", asin);
    this.setState({
      ...this.state,
      asinSelected: asin,
      colDisplay: "d-block",
    });

    if (
      this.state.colDisplay === "d-block" &&
      this.state.asinSelected === asin
    ) {
      this.setState({
        ...this.state,
        colDisplay: "d-none",
      });
    }
  };

  const selectBook = (asin) => {
    console.log("OK, works! asin: ", asin);
    setAsinSelected(asin);
    setColDisplay("d-block");
  };

  getCommentId = (commentId) => {
    console.log(commentId);
    this.setState({
      ...this.state,
      commentToDelete: commentId,
    });
  };

  getCommentRate = (rate) => {
    console.log("Rate: ", rate);

    this.setState({
      ...this.state,
      newComment: {
        ...this.state.newComment,
        rate: rate,
        elementId: this.state.asinSelected,
      },
    });
  };
  getCommentText = (text) => {
    console.log("Comment: ", text);

    this.setState({
      ...this.state,
      newComment: {
        ...this.state.newComment,
        elementId: this.state.asinSelected,
        comment: text,
      },
    });
  };

  fetchData = async () => {
    try {
      if (this.state.asinSelected) {
        let response = await fetch(
          `https://striveschool-api.herokuapp.com/api/comments/${this.state.asinSelected}`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwOWZmNTRjZmY1ZjAwMTU5MGJkYWUiLCJpYXQiOjE2NTA2MzkyOTAsImV4cCI6MTY1MTg0ODg5MH0.7Nkan4-wzQ92nOq0FpNIvxiCPAJYIAQpdk2j0qrDOMg",
            },
          }
        );

        if (response.ok) {
          response = await response.json();
          this.setState({
            ...this.state,
            comments: response,
          });
          console.log("CDM");
        }
      } else {
        console.log("No Asin");
      }
    } catch (error) {
      console.log(error);
    }
  };
  onDeleteComment = async (commentId) => {
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
      }
    } catch (error) {
      console.log("❌There is an error: ", error);
    }
    console.log("Something happened!");
  };
  componentDidUpdate = async (prevProps, PrevState) => {
    if (PrevState.asinSelected !== this.state.asinSelected) {
      await this.fetchData();
    }
    if (PrevState.commentToDelete !== this.state.commentToDelete) {
      console.log("delete ");
      await this.onDeleteComment(this.state.commentToDelete);
      await this.fetchData();
    }
    if (PrevState.comments !== this.state.comments) {
      console.log("fetch! New Data!");
    } else {
      console.log("no fetch");
    }
  };

  componentDidMount = async () => {
    this.setState({
      ...this.state,
      data: this.books,
    });
  };

  onPostComment = async (e) => {
    e.preventDefault();
    try {
      let data = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          body: JSON.stringify(this.state.newComment),
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwOWZmNTRjZmY1ZjAwMTU5MGJkYWUiLCJpYXQiOjE2NTA2NjM3MDYsImV4cCI6MTY1MTg3MzMwNn0.t-bhGh4Ste0C-qGe1NWOGB8jhgMqxJtbscKzTT-wrio",
            "Content-type": "application/json",
          },
        }
      );
      if (data.ok) {
        data = await data.json();
        console.log("✅ You just posted");

        this.setState({
          ...this.state,
          comments: [...this.state.comments, data],
        });
      }
    } catch (error) {
      console.log("❌There is an error: ", error);
    }
  };

  return (
    <div className="App bg-dark">
      <MyNav />
      <Welcome />
      <Row>
        <Col>
          <LatestRelease books={this.state.data} selectBook={this.selectBook} />
        </Col>
        <Col lg={4} className={this.state.colDisplay}>
          <div>
            <CommentArea
              onPostComment={this.onPostComment}
              comments={this.state.comments}
              onDelete={this.getCommentId}
              getCommentRate={this.getCommentRate}
              getCommentText={this.getCommentText}
            />
          </div>
        </Col>
      </Row>
      <MyFooter />
    </div>
  );
};

export default App;
