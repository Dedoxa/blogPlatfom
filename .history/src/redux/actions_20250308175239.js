export const SET_ARTICLES_DATA = (array = []) => ({ type: 'SET_ARTICLES_DATA', articlesArray: array });
export const SET_ARTICLES_AMOUNT = (number = 0) => ({ type: 'SET_ARTICLES_AMOUNT', amountOfArticles: number });
export const SET_NEW_CURRENT_PAGE = (page) => ({ type: 'SET_NEW_CURRENT_PAGE', newPage: page });
export const SET_USER_DATA = (data) => ({ type: 'SET_USER_DATA', data: data });
export const ADD_TAG_INPUT = () => ({ type: 'ADD_TAG' });
export const DELETE_TAG_INPUT = (index, array) => ({ type: 'UPDATE_TAGS', index: index, array: array });
