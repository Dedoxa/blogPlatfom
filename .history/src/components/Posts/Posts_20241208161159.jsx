import { Pagination } from 'antd';

import classes from './Posts.module.scss';

const Posts = () => {
  return (
    <>
      <Pagination defaultCurrent={1} total={50} />
      <p>dfdfd</p>
    </>
  );
};

export default Posts;
