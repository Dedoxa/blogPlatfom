export const SET_ARTICLES_DATA = (array = []) => ({ type: 'SET_ARTICLES_DATA', articlesArray: array });
export const CHANGE_PASSWORD_IN_INPUT = (textValue) => ({ type: 'CHANGE_PASSWORD_IN_INPUT', value: textValue });
export const SET_NEW_CURRENT_PAGE = (page) => ({ type: 'SET_NEW_CURRENT_PAGE', newPage: page });
export const GET_PARTICULAR_ARTICLE = (slug) => ({ type: 'GET_PARTICULAR_ARTICLE', newSlug: slug });
