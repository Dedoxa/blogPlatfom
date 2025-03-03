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
      query: (username, email, password) => ({
        url: `/users`,
        method: `POST`,
        headers: {
          'Content-Type': 'application/json',
        },
        body: `{"user":{"username":"${username}","email":"${email}","password":"${password}"}}`,
      }),
    }),
    loginUser: builder.mutation({
      query: (email, password) => ({
        url: `/users/login`,
        method: `POST`,
        headers: {
          'Content-Type': 'application/json',
        },
        body: `{"user":{"email":"${email}","password":"${password}"}}`,
      }),
    }),
    updateUser: builder.mutation({
      query: (token, email, password) => ({
        url: `/users`,
        method: `POST`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${token}`,
        },
        body: `{"email":"${email}","username":"jake","bio":"I work at State Farm.","image":null}`,
      }),
    }),
  }),
});

export const { useGetPostsQuery } = realBlogPlatform;
export const { useGetParticularArticleQuery } = realBlogPlatform;
export const { useLoginUserQuery } = realBlogPlatform;
