import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

class EditButton extends Component {
    render () {
        return (
            <div>
              <Link 
                to={
                  this.props.label === 'post'
                  ? `/${this.props.category}/edit/${this.props.id}`
                  : `/${this.props.category}/${this.props.parentId}/edit/comment/${this.props.id}`
                }
                {...this.props}
                >
                <button>Edit {_.capitalize(this.props.label)}</button>
              </Link>
            </div>
        );
    }
};

export default EditButton;