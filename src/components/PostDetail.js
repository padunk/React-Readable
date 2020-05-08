import React, { Component } from "react";
import { connect } from "react-redux";
import { loadPosts, loadVotePost } from "../actions";
import _ from "lodash";
import Loading from "./Loading";
import Comments from "./Comments";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import NewCommentButton from "./NewCommentButton";
import NotFound from "./NotFound";
import { timeConverter } from "../utils/helpers";
import Spacer from "./Spacer";

class PostDetail extends Component {
  componentDidMount() {
    const id = this.props.match.params.post_id;
    this.props.loadPosts(id);
  }

  shouldComponentUpdate(nextProps) {
    if (!this.props.post) {
      return true;
    }
    const timeStamp = _.isEqual(
      this.props.post.timestamp,
      nextProps.post.timestamp
    );
    const commentCount = _.isEqual(
      this.props.post.commentCount,
      nextProps.post.commentCount
    );

    if (timeStamp && commentCount) {
      return false;
    }
    return true;
  }

  componentDidUpdate() {
    const id = this.props.match.params.post_id;
    this.props.loadPosts(id);
  }

  render() {
    const { post } = this.props;
    const { loadVotePost } = this.props;

    return (
      <div className='main-body'>
        {post === undefined ? (
          <Loading />
        ) : post === {} ? (
          <NotFound />
        ) : (
          <div className='post-detail'>
            <h2 className='post-title'>{post.title}</h2>
            <hr />
            <Spacer height='10' />
            <p className='post-body'>{post.body}</p>
            <Spacer height='40' />
            <hr />
            <p>
              Created by: <strong>{post.author}</strong>
            </p>
            <small style={{ color: "hsla(160, 80%, 20%, 0.8)" }}>
              Date: <em>{timeConverter(post.timestamp)}</em>
            </small>
            <p>
              Vote: <strong>{post.voteScore}</strong>{" "}
              <button onClick={() => loadVotePost(post.id, "upVote")}>+</button>
              <button onClick={() => loadVotePost(post.id, "downVote")}>
                -
              </button>
            </p>
            <div className='control-button-wrapper'>
              <EditButton
                category={post.category}
                id={post.id}
                label={"post"}
              />
              <DeleteButton
                category={post.category}
                id={post.id}
                label={"post"}
              />
            </div>
            <NewCommentButton category={post.category} id={post.id} />
            <Spacer height='50' />
            <p>
              Comments: <strong>{post.commentCount}</strong>
            </p>
            <Spacer height='10' />
            <Comments
              id={post.id}
              commentCount={post.commentCount}
              category={post.category}
            />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const post = state.postsReducer[ownProps.match.params.post_id];
  return { post };
};

PostDetail = connect(mapStateToProps, { loadPosts, loadVotePost })(PostDetail);

export default PostDetail;
