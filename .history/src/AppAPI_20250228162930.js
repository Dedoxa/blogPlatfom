import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// import { ARTICLES_PER_PAGE } from './constants.jsx';

export const realBlogPlatform = createApi({
  reducerPath: 'realBlogPlatform',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://blog-platform.kata.academy/api' }),
  endpoints: (builder) => ({
    getArticles: builder.query({
      query: (number) => `/articles?offset=${number}`,
    }),
    // getPosts: builder.query({
    //   query: (pageNumber) => `/articles?offset=${(pageNumber - 1) * ARTICLES_PER_PAGE}`,
    // }),
    getParticularArticle: builder.query({
      query: (slug) => `/articles/${slug}`,
    }),
    postLogin: builder.mutation({
      query: (body) => ({
        url: 'users/login',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useLazyGetArticlesQuery } = realBlogPlatform;
export const { useGetPostsQuery } = realBlogPlatform;
export const { useGetParticularArticleQuery } = realBlogPlatform;
export const { usePostLoginMutation } = realBlogPlatform;
