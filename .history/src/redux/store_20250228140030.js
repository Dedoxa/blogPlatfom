import { configureStore } from '@reduxjs/toolkit';

import { realBlogPlatform } from '../AppAPI';

import { collectArticlesData, setNewCurrentPage } from './reducers';

const store = configureStore({
  reducer: {
    [realBlogPlatform.reducerPath]: realBlogPlatform.reducer,
    articlesData: collectArticlesData,
    currentPage: setNewCurrentPage,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(realBlogPlatform.middleware),
});

export default store;
