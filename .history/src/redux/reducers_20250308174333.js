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

export const setUserData = (state = {}, action) => {
  switch (action.type) {
    case 'SET_USER_DATA':
      return action.data;
    default:
      return state;
  }
};

export const updateTagInputs = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TAG_INPUT':
      return [...state, ...action.data];
    case 'DELETE_TAG_INPUT':
      return action.data;
    default:
      return state;
  }
};
