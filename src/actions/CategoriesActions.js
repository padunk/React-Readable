import * as FetchAPI from '../utils/api';
import { GET_CATEGORIES } from './types';

//CATEGORIES
export const loadCategories = () => dispatch => (
  FetchAPI
  .fetchCategories()
  .then(result => dispatch(getCategories(result)))
);

const getCategories = (categories) => ({
  type: GET_CATEGORIES,
  categories
});