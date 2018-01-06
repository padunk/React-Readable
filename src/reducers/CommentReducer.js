import {
  GET_ALL_COMMENTS,
  DELETE_COMMENT,
  VOTE_COMMENT,
  EDIT_COMMENT,
  GET_COMMENT
} from '../actions/types';
import _ from 'lodash';

const INITIAL_OBJ_STATE = {};

export const commentsReducer = (state = INITIAL_OBJ_STATE, action) => {
  switch (action.type) {
    case GET_ALL_COMMENTS:
      return _.mapKeys(action.comments, 'id');
    case DELETE_COMMENT:
      return _.pick(state, !action.commentDeleted);
    case VOTE_COMMENT:
      return {
        ...state,
        [action.comment.id]: action.comment
      };
    case EDIT_COMMENT:
      return {
        ...state,
        [action.commentEdited.id]: action.commentEdited
      };
    case GET_COMMENT:
      return action.singleComment;
    default:
      return state;
  }
};