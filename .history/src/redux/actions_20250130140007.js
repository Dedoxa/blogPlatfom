export const SET_ARTICLES_DATA = (array = []) => ({ type: 'SET_ARTICLES_DATA', articlesArray: array });
export const CHANGE_PASSWORD_IN_INPUT = (textValue) => ({ type: 'CHANGE_PASSWORD_IN_INPUT', value: textValue });
export const SET_NEW_CURRENT_PAGE = (page) => ({ type: 'SET_NEW_CURRENT_PAGE', newPage: page });
export const SET_CURRENT_SLUG = (slug = 'defaultSlug') => ({ type: 'SET_CURRENT_SLUG', newSlug: slug });
export const SET_CERTAIN_ARTICLE = (certainArticle) => ({
  type: 'SET_MARKDOWN_ARTICLE',
  certainArticle: certainArticle,
});
