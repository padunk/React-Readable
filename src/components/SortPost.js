import React, { Component } from 'react';
import { sortPosts } from '../actions';
import { connect } from 'react-redux';

class SortPost extends Component {
  render () {
    return (
      <div className='sort-post'>
        <form>
          Sort Posts by: 
          <select
            defaultValue={'none'} 
            onChange={(e) => this.props.sortPosts(e.target.value)}
          >
            <option value='none' disabled='true'>Sort By</option>
            <option value='commentCount'>Most Comment</option>
            <option value='timestamp'>Newest</option>
            <option value='title'>Title(A-Z)</option>
            <option value='voteScore'>Most Vote</option>
        </select>
        </form>
      </div>
    );
  }
};

SortPost = connect(null, { sortPosts })(SortPost);

export default SortPost;