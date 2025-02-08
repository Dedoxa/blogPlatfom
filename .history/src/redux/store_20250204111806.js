import { configureStore } from '@reduxjs/toolkit';

import { realBlogPlatform } from '../AppAPI';

import { setArticlesData, changePasswordInInput, changePasswordRepetitionInInput, setNewCurrentPage } from './reducers';

const store = configureStore({
  reducer: {
    [realBlogPlatform.reducerPath]: realBlogPlatform.reducer,
    ArticlesData: setArticlesData,
    loginInInput: changeLoginInInput,
    PasswordInInput: changePasswordInInput,
    PasswordRepetitionInInput: changePasswordRepetitionInInput,
    currentPage: setNewCurrentPage,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(realBlogPlatform.middleware),
});

export default store;
