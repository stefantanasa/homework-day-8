import React from "react";
import CommentsList from "./CommentsList";
import LoadingSpinner from "./LoadingSpinner";

const CommentArea = (props) => {
  // Functions to pass on as props for AddComment Component

  return (
    <div className=" mr-5">
      <h1 className="text-dark latest-release">
        Comments
        <LoadingSpinner loading={props.loading} />
      </h1>
      <CommentsList
        onPostComment={props.onPostComment}
        comments={props.comments}
        onDelete={props.onDelete}
        getCommentRate={props.getCommentRate}
        getCommentText={props.getCommentText}
        loading={props.loading}
      />
    </div>
  );
};

export default CommentArea;
