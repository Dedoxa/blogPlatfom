import { Pagination } from 'antd';
import { useSelector } from 'react-redux';
import uuid4 from 'uuid4';

import { ARTICLES_PER_PAGE } from '../../constants.jsx';
import Post from '../Post/Post.jsx';
import store from '../../redux/store.js';
import * as actions from '../../redux/actions.js';

// import classes from './PostsList.module.scss';

const PostsList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const stateArticles = useSelector((state) => state.ArticlesData);

  return (
    <>
      {stateArticles?.map((article) => (
        <Post key={uuid4()} data={article} />
      ))}
      <Pagination
        align="center"
        defaultCurrent={1}
        pageSize={ARTICLES_PER_PAGE}
        total={ARTICLES_PER_PAGE * stateArticles.length}
        onChange={(value) => {
          store.dispatch(actions.SET_NEW_CURRENT_PAGE(value));
          scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    </>
  );
};

export default PostsList;
