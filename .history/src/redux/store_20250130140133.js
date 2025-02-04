import { configureStore } from '@reduxjs/toolkit';

import { realBlogPlatform } from '../AppAPI';

import {
  setArticlesData,
  changePasswordInInput,
  changePasswordRepetitionInInput,
  setNewCurrentPage,
  setFullArticle,
  setCurrentSlug,
} from './reducers';

const store = configureStore({
  reducer: {
    [realBlogPlatform.reducerPath]: realBlogPlatform.reducer,
    ArticlesData: setArticlesData,
    PasswordInInput: changePasswordInInput,
    PasswordRepetitionInInput: changePasswordRepetitionInInput,
    currentPage: setNewCurrentPage,
    currentSlug: setCurrentSlug,
    fullArticle: setFullArticle,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(realBlogPlatform.middleware),
});

export default store;
