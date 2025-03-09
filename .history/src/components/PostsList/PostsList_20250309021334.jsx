import { useEffect } from 'react';
import { Pagination } from 'antd';
import { useSelector } from 'react-redux';
import uuid4 from 'uuid4';

import { useGetPostsQuery } from '../../AppAPI.js';
import { ARTICLES_PER_PAGE } from '../../constants.jsx';
import Post from '../Post/Post.jsx';
import store from '../../redux/store.js';
import * as actions from '../../redux/actions.js';

const PostsList = () => {
  let userToken = useSelector((state) => state.logInUserData?.token);
  if (!userToken) userToken = window.localStorage.getItem('token');
  const stateArticles = useSelector((state) => state.ArticlesData);
  const amountOfArticles = useSelector((state) => state.amountOfArticles);
  const currentPage = useSelector((state) => state.currentPage);

  const {
    data: result,
  } = useGetPostsQuery({ currentPage: currentPage, token: userToken });

  useEffect(() => {
    store.dispatch(actions.SET_ARTICLES_DATA(result?.articles));
    store.dispatch(actions.SET_ARTICLES_AMOUNT(result?.articlesCount));
  }, [result, currentPage]);

  return (
    <>
      {stateArticles?.map((article) => (
        <Post key={uuid4()} data={article} />
      ))}
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
