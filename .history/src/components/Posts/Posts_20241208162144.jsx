import { Pagination } from 'antd';

import classes from './Posts.module.scss';

const Posts = () => {
  return (
    <>
      <section className={classes.postPreview}>jhjh</section>
      <Pagination align="center" defaultCurrent={1} total={50} />
    </>
  );
};

export default Posts;
