import { Pagination } from 'antd';

import ProfileWindow from '../ProfileWindow/ProfileWindow.jsx';
import Post from '../Post/Post.jsx';
import FullArticle from '../FullArticle/FullArticle.jsx';

import classes from './ContentBox.module.scss';

const ContentBox = () => {
  const contentType = 2;

  return (
    <>
      <div className={classes.contentBox}>
        {contentType === 0 && (
          <>
            <ProfileWindow />
          </>
        )}
        {contentType === 1 && (
          <>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </>
        )}
        {contentType === 2 && (
          <>
            <FullArticle />
          </>
        )}
      </div>
      {contentType === 1 && <Pagination align="center" defaultCurrent={1} total={50} />}
    </>
  );
};

export default ContentBox;
