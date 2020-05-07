import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { connect } from 'react-redux';
import uuidv4 from 'uuid/v4';
import { loadCategories, loadAddPost } from '../actions';

class AddPost extends Component {

  componentWillMount() {
    this.props.loadCategories();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const timestamp = Date.now();
    const title = this.inputTitle.value;
    const body = this.inputBody.value;
    const author = this.inputAuthor.value;
    const category = e.target.category.value;

    if(category === 'none') {
      alert('Please change your category')
    } else {
      this.props.loadAddPost(id, timestamp, title, body, author, category)
      this.props.history.goBack();
    }
  }

  render () {
    const { categories } = this.props;

    return (
      <div className='main-body add-post-wrapper'>
        <h2>Add New Post</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
          Category:
          <br />
            <select name='category' defaultValue='none'>
            {categories === undefined
              ? null
              : categories.map((cat, idx) => (
              <option 
                value={cat.name === 'all' ? 'none' : cat.name}
                key={cat.path + idx}
                disabled={cat.name === 'all' ? 'true' : null}
              >
                {_.capitalize(cat.name)}
              </option>
            ))}
            </select>
          </label>
          <br />   
          <label>
            Author:
            <br />
            <input 
              type='text' 
              name='author' 
              required={true} ref={(input) => this.inputAuthor = input} />
          </label>
          <br />
          <label>
            Title:
            <br />
            <input 
              type='text' 
              name='title' 
              required={true} ref={(input) => this.inputTitle = input} />
          </label>
          <br />
          <label>
            Content:
            <br />
            <textarea
              name='body' 
              required={true} ref={(input) => this.inputBody = input} />
          </label>
          <br />
          <button type='submit'>Submit</button>
          <Link to='/'>
            <button>Cancel</button>
          </Link>
        </form>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  const categories = state.categoryReducer.categories;
  return { categories };
}

AddPost = connect(mapStateToProps, { loadCategories, loadAddPost })(AddPost);

export default AddPost;