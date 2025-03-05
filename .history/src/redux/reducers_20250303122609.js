// import toExcluded from './supportFunctions';

export const setArticlesData = (state = [], action) => {
  switch (action.type) {
    case 'SET_ARTICLES_DATA':
      return action.articlesArray;
    default:
      return state;
  }
};

export const setAmountOfArticles = (state = 0, action) => {
  switch (action.type) {
    case 'SET_ARTICLES_AMOUNT':
      return action.amountOfArticles;
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

export const registerNewUser = (state = null, action) => {
  switch (action.type) {
    case 'REGISTER_NEW_USER':
      return action.data;
    default:
      return state;
  }
};

export const logInUser = (state = null, action) => {
  switch (action.type) {
    case 'LOG_IN_USER':
      return action.data;
    default:
      return state;
  }
};

export const registerNewUser = (state = null, action) => {
  switch (action.type) {
    case 'REGISTER_NEW_USER':
      return action.data;
    default:
      return state;
  }
};
