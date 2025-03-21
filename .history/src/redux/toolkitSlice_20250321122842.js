import { createSlice } from '@reduxjs/toolkit';

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
      state.ArticlesData = action.payload;
    },
    setAmountOfArticles: (state, action) => {
      state.amountOfArticles = action.payload;
    },
    setNewCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setUserData: (state, action) => {
      state.logInUserData = action.payload;
    },
    addTagInput: (state, action) => {
      state.tagInputs = [...state.tagInputs, [state.tagInputs.length, action.payload]];
    },
    deleteTagInput: (state, action) => {
      state.tagInputs = action.payload[0].filter((input) => input[0] !== action.payload[1][0]);
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
