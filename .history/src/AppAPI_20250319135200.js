import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ARTICLES_PER_PAGE } from './constants.jsx';

export const realBlogPlatform = createApi({
  reducerPath: 'realBlogPlatform',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://blog-platform.kata.academy/api' }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: (data) => ({
        url: `/articles?offset=${(data.currentPage - 1) * ARTICLES_PER_PAGE}`,
        method: `GET`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }),
    }),
    getParticularArticle: builder.query({
      query: (data) => ({
        url: `/${data.slug}`,
        method: `GET`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }),
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
    updateArticle: builder.mutation({
      query: (data) => ({
        url: data.path,
        method: `PUT`,
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
          Authorization: 'Token' + ' ' + data.token,
        },
      }),
    }),
    likeArticle: builder.mutation({
      query: (data) => ({
        url: data.path,
        method: `POST`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Token' + ' ' + data.token,
        },
      }),
    }),
    unlikeArticle: builder.mutation({
      query: (data) => ({
        url: data.path,
        method: `DELETE`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Token' + ' ' + data.token,
        },
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
export const { useUpdateArticleMutation } = realBlogPlatform;
export const { useDeleteArticleMutation } = realBlogPlatform;
export const { useLikeArticleMutation } = realBlogPlatform;
export const { useUnlikeArticleMutation } = realBlogPlatform;
