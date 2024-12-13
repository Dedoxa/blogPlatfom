import { Pagination } from 'antd';

import classes from './Posts.module.scss';

const Posts = () => {
  return (
    <>
      <section className={classes.postPreview}>
        <div className={classes.postInfo}></div>
        <div className={classes.authorInfo}>
            <span>John Doe</span>
            <span>March 5, 2020</span>
        </div>
      </section>
      <Pagination align="center" defaultCurrent={1} total={50} />
    </>
  );
};

export default Posts;
