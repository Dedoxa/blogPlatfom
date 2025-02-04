import { configureStore } from '@reduxjs/toolkit';

import { realBlogPlatform } from '../AppAPI';

import {
  setArticlesData,
  changePasswordInInput,
  changePasswordRepetitionInInput,
  setNewCurrentPage,
  setNewCurrentParticularArticle,
} from './reducers';

const store = configureStore({
  reducer: {
    [realBlogPlatform.reducerPath]: realBlogPlatform.reducer,
    ArticlesData: setArticlesData,
    PasswordInInput: changePasswordInInput,
    PasswordRepetitionInInput: changePasswordRepetitionInInput,
    currentPage: setNewCurrentPage,
    currentParticularArticle: setNewCurrentParticularArticle,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(realBlogPlatform.middleware),
});

export default store;
