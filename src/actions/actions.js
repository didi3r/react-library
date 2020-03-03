import {
  SET_LOADING,
  LOAD_BOOKS,
  SELECT_BOOK,
  DELETE_BOOK,
  EDIT_BOOK
} from "./actionTypes";

export const setLoader = isLoading => {
  return {
    type: SET_LOADING,
    payload: isLoading
  };
};
export const loadBooks = books => {
  return {
    type: LOAD_BOOKS,
    payload: { books }
  };
};
export const selectBook = id => {
  return {
    type: SELECT_BOOK,
    payload: { id }
  };
};
export const deleteBook = id => {
  return {
    type: DELETE_BOOK,
    payload: { id }
  };
};
export const editBook = book => {
  return {
    type: EDIT_BOOK,
    payload: { book }
  };
};
