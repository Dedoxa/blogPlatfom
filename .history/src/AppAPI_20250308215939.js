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
      query: (data) => ({
        url: `/users`,
        method: `POST`,
        headers: {
          'Content-Type': 'application/json',
        },
        body: '{"user":' + JSON.stringify(data) + '}',
      }),
    }),
    updateUser: builder.mutation({
      query: (data) => ({
        url: `/user`,
        method: `PUT`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Token' + ' ' + data.token,
        },
        body: '{"user":' + JSON.stringify(data.user) + '}',
      }),
    }),
    logInUser: builder.mutation({
      query: (data) => ({
        url: `/users/login`,
        method: `POST`,
        headers: {
          'Content-Type': 'application/json',
        },
        body: '{"user":' + JSON.stringify(data) + '}',
      }),
    }),
    createNewArticle: builder.mutation({
      query: (data) => ({
        url: `/articles`,
        method: `POST`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Token' + ' ' + data.token,
        },
        body: '{"article":' + JSON.stringify(data.article) + '}',
      }),
    }),
    deleteArticle: builder.mutation({
      query: (data) => ({
        url: data.path,
        method: `DELETE`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Token' + ' ' + data.token,
        },
        body: '{"article":' + JSON.stringify(data.article) + '}',
      }),
    }),
  }),
});

export const { useGetPostsQuery } = realBlogPlatform;
export const { useGetParticularArticleQuery } = realBlogPlatform;
export const { useRegisterUserMutation } = realBlogPlatform;
export const { useLogInUserMutation } = realBlogPlatform;
export const { useUpdateUserMutation } = realBlogPlatform;
export const { useCreateNewArticleMutation } = realBlogPlatform;
