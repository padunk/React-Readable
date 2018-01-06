import { GET_CATEGORIES } from '../actions/types';

const inital_state = [];

export const categoryReducer = (state = inital_state, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return action.categories;
    default:
      return state;
  }
};