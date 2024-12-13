import { Pagination } from 'antd';

import classes from './Posts.module.scss';

const Posts = () => {
  return (
    <>
      <Pagination defaultCurrent={1} total={5} />
    </>
  );
};

export default Posts;
