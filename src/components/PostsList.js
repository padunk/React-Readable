import React, { Component } from "react";
import { connect } from "react-redux";
import { loadVotePost } from "../actions";
import { Link } from "react-router-dom";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import { timeConverter } from "../utils/helpers";

class PostsList extends Component {
  render() {
    const { posts, loadVotePost } = this.props;

    return (
      <div>
        <ul className='posts-ul'>
          {Object.keys(posts).map((p) => (
            <li key={posts[p].id} className='posts-list'>
              <Link to={`/${posts[p].category}/${posts[p].id}`}>
                <h2 className='post-title'>{posts[p].title}</h2>
              </Link>
              <p>
                Created by: <strong>{posts[p].author}</strong>
              </p>
              <small style={{ color: "hsla(160, 80%, 20%, 0.8)" }}>
                Date: <em>{timeConverter(posts[p].timestamp)}</em>
              </small>
              <p>
                Vote: <strong>{posts[p].voteScore}</strong>{" "}
                <button onClick={() => loadVotePost(posts[p].id, "upVote")}>
                  +
                </button>
                <button onClick={() => loadVotePost(posts[p].id, "downVote")}>
                  -
                </button>
              </p>
              <p>
                Number of Comments: <strong>{posts[p].commentCount}</strong>
              </p>
              <EditButton
                category={posts[p].category}
                id={posts[p].id}
                label={"post"}
                {...posts}
              />
              <DeleteButton
                category={posts[p].category}
                id={posts[p].id}
                label={"post"}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const posts = state.postsReducer;
  return { posts };
};

PostsList = connect(mapStateToProps, { loadVotePost })(PostsList);

export default PostsList;
