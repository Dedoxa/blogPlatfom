import { Flex } from 'antd';

import { Tags } from '../Tags/Tags.jsx';

import classes from './FullArticle.module.scss';

const FullArticle = () => {
  return (
    <section className={classes.fullPost}>
      <div className={classes.postInfo}>
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
    </section>
  );
};

export default FullArticle;
