import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadDeleteComment, loadSingleComment } from '../actions';
import Loading from './Loading';

class DeleteComment extends Component {

  componentDidMount() {
    this.props.loadSingleComment(this.props.match.params.comment_id);
  }

  deleteComment = (id) => {
    this.props.loadDeleteComment(id);
    this.props.history.goBack();
  }

    render () {
      const { comment, history} = this.props;

      if(comment === false) {
        return (<Loading />);
      }
        return (
          <div className='main-body'>
            <h4>Are you sure you want to <span style={{ color: 'red'}}>DELETE</span> this comment?</h4>
            <p>Comments: {comment.body}</p>
            <hr />
            <p>Created by: <strong>{comment.author}</strong></p>
            <button onClick={() => this.deleteComment(comment.id)}>Delete</button>
            <button onClick={() => history.push('/')}>Cancel</button>
          </div>
        );
    }
};

const mapStateToProps = (state) => {
  const comment = state.commentsReducer;
  return { comment };
}

DeleteComment = connect(mapStateToProps, { 
  loadDeleteComment, loadSingleComment 
})(DeleteComment);

export default DeleteComment;