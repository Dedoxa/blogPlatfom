export const SET_ARTICLES_DATA = (array = []) => ({ type: 'SET_ARTICLES_DATA', articlesArray: array });
export const SET_ARTICLES_AMOUNT = (number = 0) => ({ type: 'SET_ARTICLES_AMOUNT', amountOfArticles: number });
export const SET_ARTICLES_PER_PAGE = (number = 20) => ({ type: 'SET_ARTICLES_PER_PAGE', articlesPerPage: number });
export const SET_NEW_CURRENT_PAGE = (page) => ({ type: 'SET_NEW_CURRENT_PAGE', newPage: page });
