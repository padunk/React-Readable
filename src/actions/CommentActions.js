import * as FetchAPI from '../utils/api';
import {
  GET_ALL_COMMENTS,
  ADD_COMMENT,
  VOTE_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT,
  GET_COMMENT
} from './types';

//COMMENTS
export const loadAllComments = (id) => dispatch => (
  FetchAPI
  .fetchAllComments(id)
  .then(comments => dispatch(getAllComments(comments)))
)

const getAllComments = (comments) => ({
  type: GET_ALL_COMMENTS,
  comments
});

//Add comment
export const loadAddComment = (id, timestamp, body, author, parentId) => dispatch => (
  FetchAPI
  .fetchAddComment(id, timestamp, body, author, parentId)
  .then(comment => dispatch(addComment(comment)))
)

const addComment = (comment) => ({
  type: ADD_COMMENT,
  comment
});

//delete comment
export const loadDeleteComment = (id) => dispatch => (
  FetchAPI
  .fetchDeleteComment(id)
  .then(comment => dispatch(deleteComment(comment)))
)

const deleteComment = (commentDeleted) => ({
  type: DELETE_COMMENT,
  commentDeleted
})

//vote comments
export const loadVoteComment = (id, vote) => dispatch => (
  FetchAPI
  .sendVoteComment(id, vote)
  .then(vote => dispatch(voteComment(vote)))
);

const voteComment = (comment) => ({
  type: VOTE_COMMENT,
  comment
});

//edit comment
export const loadEditComment = (id, timestamp, body) => dispatch => (
  FetchAPI
  .fetchEditComment(id, timestamp, body)
  .then(comment => dispatch(editComment(comment)))
);

const editComment = (commentEdited) => ({
  type: EDIT_COMMENT,
  commentEdited
});

//get single comment
const getComment = (singleComment) => ({
  type: GET_COMMENT,
  singleComment
});

export const loadSingleComment = (id) => dispatch => (
  FetchAPI
  .fetchSingleComment(id)
  .then(comment => dispatch(getComment(comment)))
);