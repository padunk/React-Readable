import React, { Component } from "react";
import { connect } from "react-redux";
import { loadDeleteComment, loadSingleComment } from "../actions";
import Loading from "./Loading";
import Spacer from "./Spacer";

class DeleteComment extends Component {
  componentDidMount() {
    this.props.loadSingleComment(this.props.match.params.comment_id);
  }

  deleteComment = (id) => {
    this.props.loadDeleteComment(id);
    this.props.history.push(
      `/${this.props.match.params.category}/${this.props.match.params.post_id}`
    );
  };

  render() {
    const { comment, history } = this.props;

    if (comment === false) {
      return <Loading />;
    }
    return (
      <div className='main-body'>
        <p>
          Are you sure you want to{" "}
          <strong style={{ color: "red" }}>DELETE</strong> this comment?
        </p>
        <Spacer height={20} />
        <div>
          <p>Comments: </p>
          <pre>{comment.body}</pre>
          <hr />
          <p>
            Created by: <strong>{comment.author}</strong>
          </p>
          <Spacer height={10} />
          <button className='btn-danger' onClick={() => this.deleteComment(comment.id)}>Delete</button>
          <button onClick={() => history.push("/")}>Cancel</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const comment = state.commentsReducer;
  return { comment };
};

DeleteComment = connect(mapStateToProps, {
  loadDeleteComment,
  loadSingleComment,
})(DeleteComment);

export default DeleteComment;
