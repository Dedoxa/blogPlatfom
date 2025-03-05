import { configureStore } from '@reduxjs/toolkit';

import { realBlogPlatform } from '../AppAPI';

import { setArticlesData, setAmountOfArticles, setNewCurrentPage, logInUser, updateUser } from './reducers';

const store = configureStore({
  reducer: {
    [realBlogPlatform.reducerPath]: realBlogPlatform.reducer,
    ArticlesData: setArticlesData,
    amountOfArticles: setAmountOfArticles,
    currentPage: setNewCurrentPage,
    logInUserData: logInUser,
    updateUserAnswer: updateUser,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(realBlogPlatform.middleware),
});

export default store;
