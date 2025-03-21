import { configureStore } from '@reduxjs/toolkit';

import { realBlogPlatform } from '../AppAPI';

import toolkitReducer from './toolkitSlice';

const store = configureStore({
  reducer: {
    [realBlogPlatform.reducerPath]: realBlogPlatform.reducer,
    toolkit: toolkitReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(realBlogPlatform.middleware),
});

export default store;
