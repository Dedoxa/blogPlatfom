import { Pagination } from 'antd';

import Post from '../Post/Post.jsx';

import classes from './ContentBox.module.scss';

const ContentBox = () => {
  return (
    <>
      <div className={classes.contentBox}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
      <Pagination align="center" defaultCurrent={1} total={50} />
    </>
  );
};

export default ContentBox;
