import React, { Component } from "react";
import { connect } from "react-redux";
import { loadDeletePost } from "../actions";
import Spacer from "./Spacer";

class DeletePost extends Component {
  deletePost = (id) => {
    const { loadDeletePost, history } = this.props;

    loadDeletePost(id);
    history.push("/");
  };

  render() {
    const { post, history } = this.props;

    return (
      <div className='main-body'>
        <p>
          Are you sure you want to{" "}
          <strong style={{ color: "red" }}>DELETE</strong> this post?
        </p>
        <Spacer height={20} />
        <div>
          <p>Title: <strong>{post.title}</strong></p>
          <p>Created by: <em>{post.author}</em></p>
          <button
            className='btn-danger'
            onClick={() => this.deletePost(post.id)}>
            DELETE
          </button>
          <button onClick={() => history.goBack()}>CANCEL</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.post_id;
  const post = state.postsReducer[id];
  return { post };
};

DeletePost = connect(mapStateToProps, { loadDeletePost })(DeletePost);

export default DeletePost;
