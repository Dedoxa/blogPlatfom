import { Flex } from 'antd';
import { Link } from 'react-router';
import { format } from 'date-fns';

import { Tags } from '../Tags/Tags.jsx';
import { useLikeArticleMutation } from '../../AppAPI.js';

import classes from './Post.module.scss';

const Post = (data) => {
  const article = data.data;
  const formattedCreatedAt = format(article.createdAt, 'MMMM dd, y');
  const likeSymbol = article?.favorited ? 'RedLikeSymbol.svg' : 'LikeSymbol.svg';

  const []

  return (
    <section className={classes.postPreview}>
      <div className={classes.postInfo}>
        <div className={classes.titleAndLikesContainer}>
          <Link to={`/articles/${article.slug}`} className={classes.articleTitle}>
            {article.title}
          </Link>
          <img src={`../../../img/${likeSymbol}`} alt="LikeSymbol" style={{ marginRight: '4px' }} onClick={() => {

          }} />
          <span>{article.favoritesCount}</span>
        </div>
        <div className={classes.tagsContainer}>
          <Flex wrap>
            <Tags tagsArray={article.tagList} />
          </Flex>
        </div>
        <div className={classes.previewDescription}> {article.description} </div>
      </div>
      <div className={classes.authorInfo}>
        <div className={classes.NameAndDateContainer}>
          <span className={classes.Name}>{article.author.username}</span>
          <span className={classes.Date}>{formattedCreatedAt}</span>
        </div>
        <img src={article.author.image} height={46} width={46} alt="author Image" />
      </div>
    </section>
  );
};

export default Post;
