import * as FetchAPI from '../utils/api';
import {
  GET_POSTS,
  GET_SINGLE_POST,
  GET_POST_BY_CATEGORY,
  VOTE_POST,
  SORT_POST,
  EDIT_POST,
  DELETE_POST,
  ADD_POST
} from './types';

//POSTS
export const loadPosts = () => dispatch => (
  FetchAPI
  .fetchPosts()
  .then(posts => dispatch(getPosts(posts)))
);

const getPosts = (posts) => ({
  type: GET_POSTS,
  posts
});

//single post
export const loadSinglePost = (id) => dispatch => (
  FetchAPI
  .fetchSinglePost(id)
  .then(post => dispatch(getSinglePost(post)))
);

const getSinglePost = (singlePost) => ({
  type: GET_SINGLE_POST,
  singlePost
});

export const loadPostsByCategory = (category) => dispatch => (
  FetchAPI
  .fetchPostsByCategory(category)
  .then(posts => dispatch(getPostsByCategory(posts)))
);

const getPostsByCategory = (postByCat) => ({
  type: GET_POST_BY_CATEGORY,
  postByCat
});

//vote post mechanisms
export const loadVotePost = (id, vote) => dispatch => (
  FetchAPI
  .sendVotePost(id, vote)
  .then(vote => dispatch(votePost(vote)))
);

const votePost = (post) => ({
  type: VOTE_POST,
  post
});

//sort post
export const sortPosts = (sortBy) => ({
  type: SORT_POST,
  sortBy
});

//edit post
export const loadEditPost = (id, title, body) => dispatch => (
  FetchAPI
  .fetcheditPost(id, title, body)
  .then(post => dispatch(editPost(post)))
);

const editPost = (postEdited) => ({
  type: EDIT_POST,
  postEdited
});

//delete post
export const loadDeletePost = (id) => dispatch => (
  FetchAPI
  .fetchDeletePost(id)
  .then(post => dispatch(deletePost(post)))
);

const deletePost = (postDeleted) => ({
  type: DELETE_POST,
  postDeleted
});

//add post
export const loadAddPost = (id, timestamp, title, body, author, category) => dispatch => (
  FetchAPI
  .fetchAddPost(id, timestamp, title, body, author, category)
  .then(post => dispatch(addPost(post)))
)

const addPost = (postNew) => ({
  type: ADD_POST,
  postNew
});