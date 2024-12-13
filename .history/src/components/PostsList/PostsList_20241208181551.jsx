import { Pagination } from 'antd';

import Post from '../Post/Post.jsx';

import classes from './PostsList.module.scss';

const PostsList = () => {
  return (
    <>
      <div className={classes.PostsListContainer}>
        <Post />
        <Post />
        <Post />
      </div>
      <Pagination align="center" defaultCurrent={1} total={50} />
    </>
  );
};

export default PostsList;
