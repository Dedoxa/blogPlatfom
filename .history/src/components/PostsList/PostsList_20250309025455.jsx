import { useEffect } from 'react';
import { Pagination, Spin } from 'antd';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import uuid4 from 'uuid4';

import { useGetPostsQuery } from '../../AppAPI.js';
import { ARTICLES_PER_PAGE } from '../../constants.jsx';
import Post from '../Post/Post.jsx';
import store from '../../redux/store.js';
import * as actions from '../../redux/actions.js';

// import classes from './PostsList.module.scss';

const PostsList = () => {
  const { pathname } = useLocation();

  const stateArticles = useSelector((state) => state.ArticlesData);
  const amountOfArticles = useSelector((state) => state.amountOfArticles);
  const currentPage = useSelector((state) => state.currentPage);

  const { data: result, error: fetchingError, isLoading: loadingArticles, refetch } = useGetPostsQuery(currentPage);

  useEffect(() => {
    store.dispatch(actions.SET_ARTICLES_DATA(result?.articles));
    store.dispatch(actions.SET_ARTICLES_AMOUNT(result?.articlesCount));
    if (pathname === '/articles') refetch();
  }, [result, currentPage, pathname, refetch]);

  return (
    <>
      {fetchingError && console.log(fetchingError) && <h1>Error in fetching data.</h1>}
      {loadingArticles && <Spin size="large" />}
      {!fetchingError &&
        !loadingArticles &&
        stateArticles &&
        stateArticles?.map((article) => <Post key={uuid4()} data={article} />)}
      <Pagination
        align="center"
        hideOnSinglePage
        defaultCurrent={currentPage}
        defaultPageSize={ARTICLES_PER_PAGE}
        total={amountOfArticles}
        showSizeChanger="false"
        onChange={(value) => {
          store.dispatch(actions.SET_NEW_CURRENT_PAGE(value));
          // scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    </>
  );
};

export default PostsList;
