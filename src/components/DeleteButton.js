import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

class DeleteButton extends Component {
  render () {
    return (
      <div>
        <Link to={this.props.label === 'post'
          ? `/${this.props.category}/delete/${this.props.id}`
          : `/${this.props.category}/${this.props.parentId}/delete/comment/${this.props.id}`}>
          <button>Delete {_.capitalize(this.props.label)}</button>
        </Link>
      </div>
    );
  }
};

export default DeleteButton;