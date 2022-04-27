import React, { Component } from "react";

import { Form, ToggleButtonGroup, ToggleButton } from "react-bootstrap";
class AddComment extends Component {
  render() {
    return (
      <div className="bg-dark text-white m-3">
        <div>Write a comment</div>
        <Form onSubmit={this.props.onPostComment}>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label></Form.Label>
            {/* <Form.Control
              required
              as="select"
              onChange={(e) => this.props.getCommentRate(e.target.value)}
            >
              <option value={1}>1 Star</option>
              <option value={2}>2 Stars</option>
              <option value={3}>3 Stars</option>
              <option value={4}>4 Stars</option>
              <option value={5}>5 Stars</option>
            </Form.Control> */}
            <ToggleButtonGroup
              required
              onClick={(e) => this.props.getCommentRate(e.target.value)}
              type="radio"
              name="options"
              defaultValue={null}
            >
              <ToggleButton variant="danger" value={1}>
                1 Star
              </ToggleButton>
              <ToggleButton variant="danger" value={2}>
                2 Stars
              </ToggleButton>
              <ToggleButton variant="secondary" value={3}>
                3 Stars
              </ToggleButton>
              <ToggleButton variant="success" value={4}>
                4 Stars
              </ToggleButton>
              <ToggleButton variant="success" value={5}>
                5 Stars
              </ToggleButton>
            </ToggleButtonGroup>
          </Form.Group>
          <Form.Group
            className="textarea-comment"
            controlId="exampleForm.ControlTextarea1"
            onChange={(e) => this.props.getCommentText(e.target.value)}
          >
            <Form.Control required as="textarea" rows={3} />
            <button type="submit" className="btn btn-sm submit-comment">
              Send
            </button>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default AddComment;
