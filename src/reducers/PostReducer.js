import { 
  GET_POST_BY_CATEGORY,
  GET_POSTS,
  GET_SINGLE_POST,
  EDIT_POST,
  DELETE_POST,
  VOTE_POST,
  SORT_POST,
} from '../actions/types';
import _ from 'lodash';

const INITIAL_OBJ_STATE = {};

export const postsReducer = (state = INITIAL_OBJ_STATE, action) => {
    switch(action.type) {
      case GET_POSTS:
        return _.mapKeys(action.posts, 'id');
      case GET_POST_BY_CATEGORY:
        return _.mapKeys(action.postByCat, 'id');
      case GET_SINGLE_POST:
        return {
          ...state,
          [action.singlePost.id]: action.singlePost
        };
      case VOTE_POST:
        return {
          ...state,
          [action.post.id]: action.post
        };
      case SORT_POST:
        const sortType = action.sortBy;
        return sortOrder(state, sortType);
      case EDIT_POST:
        return {
          ...state,
          [action.postEdited.id]: action.postEdited
        };
      case DELETE_POST:
        return _.omit(state, action.postDeleted);
      default:
        return state;
    }
  };
  
const sortOrder = (data, sortType) => {
  switch(sortType) {
    case 'commentCount':
    case 'voteScore':
    case 'timestamp':
      return Object.keys(data)
      .sort((a,b) => data[b][sortType] - data[a][sortType])
      .reduce((_sortedObj, key) => ({
        ..._sortedObj,
        [key]: data[key]
      }), {});
    default:
      return Object.keys(data)
      .sort((a,b) => data[a][sortType] > data[b][sortType])
      .reduce((_sortedObj, key) => ({
        ..._sortedObj,
        [key]: data[key]
      }), {});
  }
};
