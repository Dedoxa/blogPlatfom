export const SET_ARTICLES_DATA = (array = []) => ({ type: 'SET_ARTICLES_DATA', articlesArray: array });
export const CHANGE_PASSWORD_IN_INPUT = (textValue) => ({ type: 'CHANGE_PASSWORD_IN_INPUT', value: textValue });
export const SET_NEW_CURRENT_PAGE = (page) => ({ type: 'SET_NEW_CURRENT_PAGE', newPage: page });
// export const SET_NEW_SLUG = (slug) => ({ type: 'SET_NEW_SLUG', newSlug: slug });
export const SET_PARTICULAR_ARTICLE = (article) => ({ type: 'GET_PARTICULAR_ARTICLE', newArticle: article });
