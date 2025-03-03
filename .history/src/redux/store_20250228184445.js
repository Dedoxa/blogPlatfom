import { configureStore } from '@reduxjs/toolkit';

import { realBlogPlatform } from '../AppAPI';

import { setArticlesData, setAmountOfArticles, setArticlesPerPage, setNewCurrentPage } from './reducers';

const store = configureStore({
  reducer: {
    [realBlogPlatform.reducerPath]: realBlogPlatform.reducer,
    ArticlesData: setArticlesData,
    amountOfArticles: setAmountOfArticles,
    articlesPerPage: setArticlesPerPage,
    currentPage: setNewCurrentPage,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(realBlogPlatform.middleware),
});

export default store;
