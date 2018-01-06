import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadDeletePost } from '../actions';

class DeletePost extends Component {

    deletePost = (id) => {
        const { loadDeletePost, history } = this.props;

        loadDeletePost(id);
        history.push('/');
    }

    render () {
        const { post, history } = this.props;

        return (
            <div className='main-body'>
                <h2>Are you sure you want to <span style={{color: 'red'}}>DELETE</span> this post?</h2>
                <h4>Title: {post.title}</h4>
                <p>Created by: {post.author}</p>
                <button onClick={() => this.deletePost(post.id)}>DELETE</button>
                <button onClick={() => history.goBack()}>CANCEL</button>
            </div>
        )
    }
};

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.post_id;
    const post = state.postsReducer[id];
    return { post };
};

DeletePost = connect(mapStateToProps, { loadDeletePost })(DeletePost);

export default DeletePost;