import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadEditComment } from '../actions';

class EditComment extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    const timestamp = Date.now();
    const body = this.inputBody.value;
    const id = this.props.match.params.comment_id;

    this.props.loadEditComment(id, timestamp, body);
    this.props.history.goBack();
  }

    render () {
        return (
          <div className='main-body'>
          <form onSubmit={this.handleSubmit}>
          <h2>Edit Comment</h2>
            <label>
              Content:
              <br />
              <textarea 
                defaultValue={this.props.comment.body}
                required='true' 
                name='body' 
                ref={(inputBody) => this.inputBody = inputBody} />
            </label>
            <br />
            <input type='submit' value='Submit' />
            <input type='button' value='Cancel' onClick={() => this.props.history.goBack()} />
          </form>
          </div>
        );
    }
};

const mapStateToProps = (state, ownProps) => {
  const commentId = ownProps.match.params.comment_id;
  const comment = state.commentsReducer[commentId];
  return { comment };
}

EditComment = connect(mapStateToProps, { loadEditComment })(EditComment);

export default EditComment;