import { configureStore } from '@reduxjs/toolkit';

import { realBlogPlatform } from '../AppAPI';

import { setArticlesData, setAmountOfArticles, setNewCurrentPage, setUserData, updateTagInputs } from './reducers';

const store = configureStore({
  reducer: {
    [realBlogPlatform.reducerPath]: realBlogPlatform.reducer,
    ArticlesData: setArticlesData,
    amountOfArticles: setAmountOfArticles,
    currentPage: setNewCurrentPage,
    logInUserData: setUserData,
    tagInputs: updateTagInputs,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(realBlogPlatform.middleware),
});

export default store;
