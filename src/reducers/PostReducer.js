import {
  GET_POST_BY_CATEGORY,
  GET_POSTS,
  GET_SINGLE_POST,
  EDIT_POST,
  DELETE_POST,
  VOTE_POST,
  SORT_POST,
} from "../actions/types";
import _ from "lodash";

const INITIAL_OBJ_STATE = {};

export const postsReducer = (state = INITIAL_OBJ_STATE, action) => {
  switch (action.type) {
    case GET_POSTS:
      return _.mapKeys(action.posts, "id");
    case GET_POST_BY_CATEGORY:
      return _.mapKeys(action.postByCat, "id");
    case GET_SINGLE_POST:
      return {
        ...state,
        [action.singlePost.id]: action.singlePost,
      };
    case VOTE_POST:
      return {
        ...state,
        [action.post.id]: action.post,
      };
    case SORT_POST:
      const sortType = action.sortBy;
      return sortOrder(state, sortType);
    case EDIT_POST:
      return {
        ...state,
        [action.postEdited.id]: action.postEdited,
      };
    case DELETE_POST:
      return _.omit(state, action.postDeleted);
    default:
      return state;
  }
};

const sortOrder = (data, sortType) => {
  const newData = Object.values(data);
  const order = sortType === 'voteScore' ? 'desc' : 'asc';

  return _.orderBy(newData, [sortType], [order]).reduce(
    (_sortedObj, key) => ({
      ..._sortedObj,
      [key.id]: key,
    }),
    {}
  );
};
