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
import Spacer from './Spacer';

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
            ? <p style={{color: 'white', textAlign: 'center'}}>
              No comment on this post yet. Why don't add one?</p>
            : Object.keys(comments).map(c => (
              <li key={comments[c].id} className='comment-list'>
                <p><em>{comments[c].body}</em></p>
                <Spacer height={20} />
                <hr />
                <Spacer height={10} />
                <p>Comment by: <strong>{comments[c].author}</strong></p>
                <small style={{ color: "hsla(160, 80%, 20%, 0.8)" }}>
                  Date: {timeConverter(comments[c].timestamp)}
                </small>
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