export const SET_ARTICLES_DATA = (array = []) => ({ type: 'SET_ARTICLES_DATA', articlesArray: array });
export const SET_ARTICLES_AMOUNT = (number = 0) => ({ type: 'SET_ARTICLES_AMOUNT', amountOfArticles: number });
export const SET_NEW_CURRENT_PAGE = (page) => ({ type: 'SET_NEW_CURRENT_PAGE', newPage: page });
export const SET_USER_DATA = (data) => ({ type: 'SET_USER_DATA', data: data });
export const ADD_TAG_INPUT = { type: 'ADD_TAG_INPUT' };
export const DELETE_TAG_INPUT = (element, array) => ({ type: 'DELETE_TAG_INPUT', element: element, array: array });
export const SHOW_MODAL = { type: 'SHOW_MODAL' };
export const HIDE_MODAL = { type: 'HIDE_MODAL' };
