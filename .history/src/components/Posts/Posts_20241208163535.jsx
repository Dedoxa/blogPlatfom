import { Pagination } from 'antd';

import classes from './Posts.module.scss';

const Posts = () => {
  return (
    <div >
      <section className={classes.postPreview}>
        <div className={classes.postInfo}></div>
        <div className={classes.authorInfo}>
          <div className={classes.NameAndDateContainer}>
            <span className={classes.Name}>John Doe</span>
            <span className={classes.Date}>March 5, 2020</span>
          </div>
          <img src="../../../public/img/John Doe.png" width={46} alt="author Image" />
        </div>
      </section>
      <Pagination align="center" defaultCurrent={1} total={50} />
    </div>
  );
};

export default Posts;
