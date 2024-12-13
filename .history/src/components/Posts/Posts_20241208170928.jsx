import { Pagination, Flex } from 'antd';

import { Tags } from './Tags.jsx';

import classes from './Posts.module.scss';

const Posts = () => {
  return (
    <>
      <div className={classes.postsContainer}>
        <section className={classes.postPreview}>
          <div className={classes.postInfo}>
            <div>
              <span className={classes.articleTitle}>Some article title</span>
              <img src="../../../public/img/LikeSymbol.svg" alt="LikeSymbol" />
              <span>12</span>
            </div>
            <div>
              <Flex wrap>
                <Genres ids={genre_ids} />
              </Flex>
            </div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.{' '}
            </div>
          </div>
          <div className={classes.authorInfo}>
            <div className={classes.NameAndDateContainer}>
              <span className={classes.Name}>John Doe</span>
              <span className={classes.Date}>March 5, 2020</span>
            </div>
            <img src="../../../public/img/John Doe.png" width={46} alt="author Image" />
          </div>
        </section>
      </div>
      <Pagination align="center" defaultCurrent={1} total={50} />
    </>
  );
};

export default Posts;
