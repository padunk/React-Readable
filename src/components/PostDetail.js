import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadPosts, loadVotePost } from '../actions';
import Loading from './Loading';
import Comments from './Comments';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
import NewCommentButton from './NewCommentButton';
import NotFound from './NotFound';
import { timeConverter } from '../utils/helpers';

class PostDetail extends Component {

  componentDidMount() {
    const id = this.props.match.params.post_id;
    this.props.loadPosts(id);
  }

    render () {
      const { post } = this.props;
      const { loadVotePost } = this.props;

      return (
        <div className='main-body'>
          {post === {} ? <Loading /> : post === undefined ? <NotFound /> :
            <div className='post-detail'>
              <h2 className='post-title'>{post.title}</h2>
              <hr />
              <p>{post.body}</p>
              <p>Created by: <strong>{post.author}</strong></p>
              <p>{timeConverter(post.timestamp)}</p>
              <p>Vote: {post.voteScore}</p>
              <button onClick={() => loadVotePost(post.id, 'upVote')}>+</button>
              <button onClick={() => loadVotePost(post.id, 'downVote')}>-</button>              
              <EditButton 
                category={post.category}
                id={post.id}
                label={'post'}
              />
              <DeleteButton 
                category={post.category}
                id={post.id}
                label={'post'}
              />
              <NewCommentButton
                category={post.category}
                id={post.id}
              />
              <h4>Comments: {post.commentCount}</h4>
              <Comments 
                id={post.id} 
                commentCount={post.commentCount}
                category={post.category}
              />
            </div>
          }
        </div>
      )
    }
};

const mapStateToProps = (state, ownProps) => {
  const post = state.postsReducer[ownProps.match.params.post_id];
  return { post };
};

PostDetail = connect(mapStateToProps, { loadPosts, loadVotePost })(PostDetail);

export default PostDetail;