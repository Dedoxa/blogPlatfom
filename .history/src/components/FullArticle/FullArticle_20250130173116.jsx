import { Flex } from 'antd';
import { useParams } from 'react-router';

import { Tags } from '../Tags/Tags.jsx';
import DeleteArticleModalWindow from '../DeleteArticleModalWindow/DeleteArticleModalWindow.jsx';
import { useGetParticularArticleQuery } from '../../AppAPI.js';

import classes from './FullArticle.module.scss';

const FullArticle = () => {
  const { slug } = useParams();
  const { data: fullArticle } = useGetParticularArticleQuery(slug);
  const article = fullArticle?.article;
  const AUTHORIZED = 0;

  return (
    <section className={classes.fullPost}>
      <div className={classes.postInfo}>
        <div>
          <div className={classes.titleAndLikesContainer}>
            <span className={classes.articleTitle}>{article?.title}</span>
            <img src="../../../public/img/LikeSymbol.svg" alt="LikeSymbol" style={{ marginRight: '4px' }} />
            <span>{article?.favoritesCount}</span>
          </div>
          <div className={classes.tagsContainer}>
            <Flex wrap>
              <Tags ids={[1]} />
              {/* <Tags ids={article?.tagList} /> */}
            </Flex>
          </div>
        </div>
        <div className={classes.authorInfo}>
          <div className={classes.NameAndDateContainer}>
            <span className={classes.Name}>{article?.author?.username}</span>
            <span className={classes.Date}>{article?.createdAt}</span>
          </div>
          <img src={article?.author?.image} height={46} width={46} alt="author Image" />
        </div>
      </div>
      <div className={classes.postContent}>
        <div className={classes.postDescription}>{article?.description}</div>
        {AUTHORIZED === 1 && (
          <div style={{ display: 'flex', gap: '12px' }}>
            <span className={classes.fullArticleRedButton}>Delete</span>
            <DeleteArticleModalWindow />
            <span className={classes.fullArticleGreenButton}>Edit</span>
          </div>
        )}
      </div>
      <div className={classes.postText}>{article?.body}</div>
    </section>
  );
};

export default FullArticle;
