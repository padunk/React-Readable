import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NewCommentButton extends Component {
    render () {
        return (
            <div>
              <Link to={`/${this.props.category}/${this.props.id}/comments/new`}>
                <button className='add-comment'>Add New Comment</button>
              </Link>
            </div>
        );
    }
};

export default NewCommentButton;