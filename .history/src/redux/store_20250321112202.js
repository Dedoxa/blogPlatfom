import { configureStore } from '@reduxjs/toolkit';

import { realBlogPlatform } from '../AppAPI';

import toolkitReducer from './toolkitSlice';

const store = configureStore({
  reducer: {
    toolkit: 
    // [realBlogPlatform.reducerPath]: realBlogPlatform.reducer,
    // ArticlesData: setArticlesData,
    // amountOfArticles: setAmountOfArticles,
    // currentPage: setNewCurrentPage,
    // logInUserData: setUserData,
    // tagInputs: updateTagInputs,
    // modalIsVisible: setModalVisibility,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(realBlogPlatform.middleware),
});

export default store;
