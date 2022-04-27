import React, { Component } from "react";
import CommentsList from "./CommentsList";
class CommentArea extends Component {
  // Functions to pass on as props for AddComment Component

  componentDidMount = async () => {};
  render() {
    return (
      <div className="bg-dark text-white mr-5">
        <h1 className="text-white latest-release">Comments</h1>
        <CommentsList
          onPostComment={this.props.onPostComment}
          comments={this.props.comments}
          onDelete={this.props.onDelete}
          getCommentRate={this.props.getCommentRate}
          getCommentText={this.props.getCommentText}
        />
      </div>
    );
  }
}

export default CommentArea;
