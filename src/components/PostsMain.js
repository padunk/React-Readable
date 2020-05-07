import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  loadPosts, 
  loadPostsByCategory,
 } from '../actions';
import { withRouter, Link } from 'react-router-dom';
import PostsList from './PostsList';
import SortPost from './SortPost';

class PostsMain extends Component {

  componentDidMount() {
    const { filterUrl, loadPosts, loadPostsByCategory } = this.props;

    filterUrl === 'all'
    ? loadPosts()
    : loadPostsByCategory(filterUrl)
  }

  componentDidUpdate() {
    const { filterUrl, loadPosts, loadPostsByCategory } = this.props;

    filterUrl === 'all'
    ? loadPosts()
    : loadPostsByCategory(filterUrl)
  }

  render() {
    return (
      <div className='main-body'>
        <SortPost />
        <Link to='/add/post/new'>
          <button className='add-post'>Add New Post</button>
        </Link>
        <PostsList />
      </div>
    )
  }
}

const mapStateToProps = (state, { match }) => {
  const filterUrl = match.params.category || 'all';
  return {
    filterUrl
  };
};

PostsMain = withRouter(connect(mapStateToProps, {
  loadPosts,
  loadPostsByCategory,
})(PostsMain));

export default PostsMain;
