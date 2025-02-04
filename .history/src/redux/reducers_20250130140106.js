// import toExcluded from './supportFunctions';

export const setArticlesData = (state = [], action) => {
  switch (action.type) {
    case 'SET_ARTICLES_DATA':
      return action.articlesArray;
    default:
      return state;
  }
};

export const changePasswordInInput = (state = '', action) => {
  switch (action.type) {
    case 'CHANGE_PASSWORD_IN_INPUT':
      return action.value;
    default:
      return state;
  }
};

export const changePasswordRepetitionInInput = (state = '', action) => {
  switch (action.type) {
    case 'CHANGE_PASSWORD_REPETITION_IN_INPUT':
      return action.value;
    default:
      return state;
  }
};

export const setNewCurrentPage = (state = 1, action) => {
  switch (action.type) {
    case 'SET_NEW_CURRENT_PAGE':
      return action.newPage;
    default:
      return state;
  }
};

export const setCurrentSlug = (state = 'defaultStoreSlug', action) => {
  switch (action.type) {
    case 'SET_CURRENT_SLUG':
      return action.newSlug;
    default:
      return state;
  }
};

export const setFullArticle = (state = 0, action) => {
  switch (action.type) {
    case 'SET_CERTAIN_ARTICLE':
      return action.certainArticle;
    default:
      return state;
  }
};
