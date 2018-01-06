import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  loadAllComments, 
  loadVoteComment, 
} from '../actions';
//import Loading from './Loading';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
import { timeConverter } from '../utils/helpers';

class Comments extends Component {

  componentDidMount() {
    this.props.loadAllComments(this.props.id);
  }

  // componentWillReceiveProps(nextProps) {
  //   this.props.id !== nextProps.id || this.props.commentCount !== nextProps.commentCount
  //   ? this.props.loadAllComments(nextProps.id)
  //   : <Loading />
  // }

  deleteComment = (id) => {
    this.props.loadDeleteComment(id);
  }

    render () {
      const { comments } = this.props;

      return (
        <div className='comment-div'>
          <ul className='comment-ul'>
            {this.props.commentCount === 0
            ? <h4 style={{color: 'white', textAlign: 'center'}}>
              No comment on this post yet. Why don't add one?</h4>
            : Object.keys(comments).map(c => (
              <li key={comments[c].id} className='comment-list'>
                <em>{comments[c].body}</em>
                <hr />
                <p>Comment by: <strong>{comments[c].author}</strong></p>
                <p>Date: {timeConverter(comments[c].timestamp)}</p>
                <p>Vote: {comments[c].voteScore}</p>
                <button onClick={() => this.props.loadVoteComment(comments[c].id, 'upVote')}>+</button>
                <button onClick={() => this.props.loadVoteComment(comments[c].id, 'downVote')}>-</button>
                <EditButton
                  category={this.props.category}
                  parentId={this.props.id}
                  id={comments[c].id}
                  label='comment'
                />
                <DeleteButton
                  category={this.props.category}
                  parentId={this.props.id}
                  id={comments[c].id}
                  label='comment'
                />
              </li>
            ))}
          </ul>
        </div>
      );
    }
};

const mapStateToProps = (state) => {
  const comments = state.commentsReducer;
  return { comments };
};

Comments = connect(mapStateToProps, { 
  loadAllComments,
  loadVoteComment,
})(Comments);

export default Comments;