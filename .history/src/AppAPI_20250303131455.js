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
        body: `{"user":${JSON.stringify(data)}`,
      }),
    }),
    loginUser: builder.mutation({
      query: (data) => ({
        url: `/users/login`,
        method: `POST`,
        headers: {
          'Content-Type': 'application/json',
        },
        body: `{"user":${JSON.stringify(data)}}`,
      }),
    }),
    updateUser: builder.mutation({
      query: (token, email, username, bio, imageURL, password) => ({
        url: `/users`,
        method: `POST`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${token}`,
        },
        body: `{"user":{"email":"${email}","username":"${username}","bio":"SampleText","image":${imageURL},"password":"${password}"}}`,
      }),
    }),
  }),
});

export const { useGetPostsQuery } = realBlogPlatform;
export const { useGetParticularArticleQuery } = realBlogPlatform;
export const { useLazyRegisterUserMutation } = realBlogPlatform;
export const { useLazyLoginUserMutation } = realBlogPlatform;
export const { useLazyUpdateUserMutation } = realBlogPlatform;
