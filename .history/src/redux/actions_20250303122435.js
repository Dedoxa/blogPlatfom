export const SET_ARTICLES_DATA = (array = []) => ({ type: 'SET_ARTICLES_DATA', articlesArray: array });
export const SET_ARTICLES_AMOUNT = (number = 0) => ({ type: 'SET_ARTICLES_AMOUNT', amountOfArticles: number });
export const SET_NEW_CURRENT_PAGE = (page) => ({ type: 'SET_NEW_CURRENT_PAGE', newPage: page });
export const REGISTER_NEW_USER = (data) => ({ type: 'REGISTER_NEW_USER', data: data });
export const LOG_IN_USER = (data) => ({ type: 'LOG_IN_USER', data: data });
export const UPDATE_USER = (data) => ({ type: 'UPDATE_USER', data: data });
