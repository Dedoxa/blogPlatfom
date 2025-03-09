export const SET_ARTICLES_DATA = (array = []) => ({ type: 'SET_ARTICLES_DATA', articlesArray: array });
export const SET_ARTICLES_AMOUNT = (number = 0) => ({ type: 'SET_ARTICLES_AMOUNT', amountOfArticles: number });
export const SET_NEW_CURRENT_PAGE = (page) => ({ type: 'SET_NEW_CURRENT_PAGE', newPage: page });
export const SET_USER_DATA = (data) => ({ type: 'SET_USER_DATA', data: data });
export const ADD_TAG_INPUT = (value) => ({ type: 'ADD_TAG_INPUT', value: value });
export const CLEAR_TAG_INPUT = { type: 'CLEAR_TAG_INPUT' };
export const SHOW_MODAL = { type: 'SHOW_MODAL' };
export const HIDE_MODAL = { type: 'HIDE_MODAL' };
export const DELETE_TAG_INPUT = (propCouple, parentArray) => ({
  type: 'DELETE_TAG_INPUT',
  propCouple: propCouple,
  parentArray: parentArray,
});
