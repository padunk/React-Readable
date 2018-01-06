import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuidv4 from 'uuid/v4';
import { loadAddComment } from '../actions';

class AddComment extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const timestamp = Date.now();
    const body = this.inputBody.value;
    const author = this.inputAuthor.value;
    const parentId = this.props.match.params.post_id;

    this.props.loadAddComment(id, timestamp, body, author, parentId)
    this.props.history.goBack();
  };

  render () {
    return (
      <div className='main-body'>
        <form onSubmit={this.handleSubmit}>
          <label>
          Comment:
          <br />
          <textarea 
            type='text' 
            required='true' 
            name='body' 
            ref={(input) => this.inputBody = input} 
          />
          </label>
          <br />
          <label>
          Your name goes here:
          <br />
          <input 
            type='text' 
            required='true' 
            name='author' 
            ref={(input) => this.inputAuthor = input} 
          />
          </label>
          <br />
          <input type='submit' value='Submit' />
          <input 
            type='button' 
            value='Cancel' 
            onClick={() => this.props.history.push('/')} 
          />
        </form>
      </div>
    );
  }
};

AddComment = connect(null, { loadAddComment })(AddComment);

export default AddComment;