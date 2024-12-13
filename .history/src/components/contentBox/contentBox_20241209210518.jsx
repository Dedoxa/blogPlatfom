import { Pagination } from 'antd';

import Post from '../Post/Post.jsx';

import classes from './ContentBox.module.scss';

const ContentBox = () => {
  const contentType = 2;

  return (
    <>
      <div className={classes.contentBox}>
        {contentType === 1 && (
          <>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </>
        )}
      </div>
      {contentType === 1 && <Pagination align="center" defaultCurrent={1} total={50} />}
    </>
  );
};

export default ContentBox;
