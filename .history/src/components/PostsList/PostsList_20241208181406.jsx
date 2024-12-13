import { Pagination, Flex } from 'antd';

import { Tags } from '../Tags/Tags.jsx';

import classes from './PostsList.module.scss';

const PostsList = () => {
  return (
    <>
      <div className={classes.PostsListContainer}>
        
      </div>
      <Pagination align="center" defaultCurrent={1} total={50} />
    </>
  );
};

export default PostsList;
