import { Pagination } from 'antd';
import { useSelector } from 'react-redux';
import uuid4 from 'uuid4';

import { ARTICLES_PER_PAGE } from '../../constants.jsx';
import Post from '../Post/Post.jsx';
import store from '../../redux/store.js';
import { setNewCurrentPage } from '../../redux/toolkitSlice.js';

const PostsList = () => {
  const stateArticles = useSelector((state) => state.ArticlesData);
  const amountOfArticles = useSelector((state) => state.amountOfArticles);
  const currentPage = useSelector((state) => state.currentPage);

  return (
    <>
      {stateArticles && stateArticles?.map((article) => <Post key={uuid4()} data={article} />)}
      <Pagination
        align="center"
        hideOnSinglePage
        defaultCurrent={currentPage}
        defaultPageSize={ARTICLES_PER_PAGE}
        total={amountOfArticles}
        showSizeChanger="false"
        onChange={(value) => {
          store.dispatch(setNewCurrentPage(value));
          // scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    </>
  );
};

export default PostsList;
