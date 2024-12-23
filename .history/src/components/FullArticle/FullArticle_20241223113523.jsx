import { Flex } from 'antd';

import { Tags } from '../Tags/Tags.jsx';

import classes from './FullArticle.module.scss';

const FullArticle = () => {
  return (
    <section className={classes.fullPost}>
      <div className={classes.postInfo}>
        <div>
          <div className={classes.titleAndLikesContainer}>
            <span className={classes.articleTitle}>Some article title</span>
            <img src="../../../public/img/LikeSymbol.svg" alt="LikeSymbol" style={{ marginRight: '4px' }} />
            <span>12</span>
          </div>
          <div>
            <Flex wrap>
              <Tags ids={['Tag1', 'Tag2', 'Tag3']} />
            </Flex>
          </div>
        </div>
        <div className={classes.authorInfo}>
          <div className={classes.NameAndDateContainer}>
            <span className={classes.Name}>John Doe</span>
            <span className={classes.Date}>March 5, 2020</span>
          </div>
          <img src="../../../public/img/John Doe.png" height={46} width={46} alt="author Image" />
        </div>
      </div>
      <div style={classes.postContent}>
        <div className={classes.postDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. .{' '}
        </div>
        <span className={classes.fullArticleGreenButton}>Edit</span>
      </div>
    </section>
  );
};

export default FullArticle;
