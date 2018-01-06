import { combineReducers } from 'redux';
import { categoryReducer } from './CategoriesReducer';
import { postsReducer } from './PostReducer';
import { commentsReducer } from './CommentReducer';

const rootReducer = combineReducers({
  categoryReducer,
  postsReducer,
  commentsReducer
});

export default rootReducer;
