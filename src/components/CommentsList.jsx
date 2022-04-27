import React from "react";

import { ListGroup, Badge } from "react-bootstrap";
import AddComment from "./AddComment";
import Alarm from "./Alarm";

const CommentsList = ({
  comments,
  onDelete,
  getCommentRate,
  getCommentText,
  onPostComment,
  loading,
}) => {
  
  return (
    <React.Fragment>
      
      <AddComment
        onPostComment={onPostComment}
        getCommentRate={getCommentRate}
        getCommentText={getCommentText}
      />

      <ListGroup>
        {/* {comments.map((c) => console.log(c))} */}
        {comments.map((com) => (
          <div key={com._id}>
            <ul class="list-group list-group-flush">
              <li class="list-group-item list-group-item-info d-flex justify-content-between align-items-center">
                <Badge variant="warning">{com.rate} stars</Badge>
                {com.comment}
                <button
                  type="button"
                  onClick={() => onDelete(com._id)}
                  className="btn btn-danger"
                >
                  <i className="fa-solid fa-trash-can"></i>
                </button>
              </li>
            </ul>
          </div>
        ))}
      </ListGroup>
    </React.Fragment>
  );
};

export default CommentsList;
