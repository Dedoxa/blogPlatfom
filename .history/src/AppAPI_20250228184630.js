import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { useSelector } from 'react-redux';

import store from './redux/store.js';
import { ARTICLES_PER_PAGE } from './constants.jsx';

const articlesPerPage = useSelector((state) => state.articlesPerPage);

export const realBlogPlatform = createApi({
  reducerPath: 'realBlogPlatform',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://blog-platform.kata.academy/api' }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: (pageNumber) => `/articles?offset=${(pageNumber - 1) * ARTICLES_PER_PAGE}`,
    }),
    getParticularArticle: builder.query({
      query: (slug) => `/articles/${slug}`,
    }),
    postLogin: builder.query({
      query: (jsonString) => `users/login/${jsonString}`,
    }),
  }),
});

export const { useGetPostsQuery } = realBlogPlatform;
export const { useGetParticularArticleQuery } = realBlogPlatform;
export const { usePostLoginQuery } = realBlogPlatform;
