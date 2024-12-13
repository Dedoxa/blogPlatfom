import { Pagination } from 'antd';

import classes from './Posts.module.scss';

const Posts = () => {
  return (
    <>
      <Pagination align='center' defaultCurrent={1} total={50} />
    </>
  );
};

export default Posts;
