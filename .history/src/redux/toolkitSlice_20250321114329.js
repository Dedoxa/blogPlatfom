import { createAction, createSlice } from '@reduxjs/toolkit';

const setArticles = createAction('SET_ARTICLES_DATA');
const setArticlesAmount = createAction('SET_ARTICLES_AMOUNT');
const setCurrentPage = createAction('SET_NEW_CURRENT_PAGE');
const setUser = createAction('SET_USER_DATA');
const addTagfield = createAction('ADD_TAG_INPUT');
const deleteTagField = createAction('DELETE_TAG_INPUT');
const clearTagField = createAction('CLEAR_TAG_INPUT');
const showModalWindow = createAction('SHOW_MODAL');
const hideModalWindow = createAction('HIDE_MODAL');

export const SET_ARTICLES_DATA = (array = []) => ({ type: 'SET_ARTICLES_DATA', articlesArray: array });
export const SET_ARTICLES_AMOUNT = (number = 0) => ({ type: 'SET_ARTICLES_AMOUNT', amountOfArticles: number });
export const SET_NEW_CURRENT_PAGE = (page) => ({ type: 'SET_NEW_CURRENT_PAGE', newPage: page });
export const SET_USER_DATA = (data) => ({ type: 'SET_USER_DATA', data: data });
export const ADD_TAG_INPUT = (value) => ({ type: 'ADD_TAG_INPUT', value: value });
export const DELETE_TAG_INPUT = (propCouple, parentArray) => ({
  type: 'DELETE_TAG_INPUT',
  propCouple: propCouple,
  parentArray: parentArray,
});
export const CLEAR_TAG_INPUT = { type: 'CLEAR_TAG_INPUT' };
export const SHOW_MODAL = { type: 'SHOW_MODAL' };
export const HIDE_MODAL = { type: 'HIDE_MODAL' };

const initialState = {
  ArticlesData: [],
  amountOfArticles: 0,
  currentPage: 1,
  logInUserData: {},
  tagInputs: [],
  modalIsVisible: false,
};

export const toolkitSlice = createSlice({
  name: 'toolkit',
  initialState,
  reducers: {
    setArticlesData: (state, action) => {
      state.ArticlesData = action.articlesArray;
    },
    setAmountOfArticles: (state, action) => {
      state.amountOfArticles = action.amountOfArticles;
    },
    setNewCurrentPage: (state, action) => {
      state.currentPage = action.newPage;
    },
    setUserData: (state, action) => {
      state.logInUserData = action.data;
    },
    addTagInput: (state, action) => {
      state.tagInputs = [...state.tagInputs, [state.tagInputs.length, action.value]];
    },
    deleteTagInput: (state, action) => {
      state.tagInputs = action.parentArray.filter((input) => input[0] !== action.propCouple[0]);
    },
    clearTagInput: (state) => {
      state.tagInputs = [];
    },
    showModal: (state) => {
      state.modalIsVisible = true;
    },
    hideModal: (state) => {
      state.modalIsVisible = false;
    },
  },
});

export const {
  setArticlesData,
  setAmountOfArticles,
  setNewCurrentPage,
  setUserData,
  addTagInput,
  deleteTagInput,
  clearTagInput,
  showModal,
  hideModal,
} = toolkitSlice.actions;

export default toolkitSlice.reducer;

// export const setArticlesData = (state = [], action) => {
//   switch (action.type) {
//     case 'SET_ARTICLES_DATA':
//       return action.articlesArray;
//     default:
//       return state;
//   }
// };

// export const setAmountOfArticles = (state = 0, action) => {
//   switch (action.type) {
//     case 'SET_ARTICLES_AMOUNT':
//       return action.amountOfArticles;
//     default:
//       return state;
//   }
// };

// export const setNewCurrentPage = (state = 1, action) => {
//   switch (action.type) {
//     case 'SET_NEW_CURRENT_PAGE':
//       return action.newPage;
//     default:
//       return state;
//   }
// };

// export const setUserData = (state = {}, action) => {
//   switch (action.type) {
//     case 'SET_USER_DATA':
//       return action.data;
//     default:
//       return state;
//   }
// };

// export const updateTagInputs = (state = [], action) => {
//   switch (action.type) {
//     case 'ADD_TAG_INPUT':
//       return [...state, [state.length, action.value]];
//     case 'DELETE_TAG_INPUT':
//       return action.parentArray.filter((input) => input[0] !== action.propCouple[0]);
//     case 'CLEAR_TAG_INPUT':
//       return [];
//     default:
//       return state;
//   }
// };

// export const setModalVisibility = (state = false, action) => {
//   switch (action.type) {
//     case 'SHOW_MODAL':
//       return true;
//     case 'HIDE_MODAL':
//       return false;
//     default:
//       return state;
//   }
// };
