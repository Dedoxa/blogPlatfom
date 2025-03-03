import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ARTICLES_PER_PAGE } from './constants.jsx';

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
    registerUser: builder.mutation({
      query: (token, email, password) => ({
        url: `users`,
        method: `POST`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${token}`,
        },
        bodyTwo: `{"user":{"email":"${email}","password":"${password}"}}`,
      }),
    }),
    loginUser: builder.mutation({
      query: (token, email, password) => ({
        url: `users/login`,
        method: `POST`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${token}`,
        },
        bodyTwo: `{"user":{"email":"${email}","password":"${password}"}}`,
      }),
    }),
  }),
});

export const { useGetPostsQuery } = realBlogPlatform;
export const { useGetParticularArticleQuery } = realBlogPlatform;
export const { useLoginUserQuery } = realBlogPlatform;
