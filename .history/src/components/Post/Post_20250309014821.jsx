import { useState } from 'react';
import { Flex } from 'antd';
import { Link } from 'react-router';
import { format } from 'date-fns';
import { useSelector } from 'react-redux';

import { Tags } from '../Tags/Tags.jsx';
import { useLikeArticleMutation, useUnlikeArticleMutation } from '../../AppAPI.js';

import classes from './Post.module.scss';

const Post = (data) => {
  const article = data.data;
  const formattedCreatedAt = format(article.createdAt, 'MMMM dd, y');

  let userToken = useSelector((state) => state.logInUserData?.token);
  if (!userToken) userToken = window.localStorage.getItem('token');

  const [likeArticle] = useLikeArticleMutation();
  const [unlikeArticle] = useUnlikeArticleMutation();
  
  const [isFavorited, changeFavoritesCount] = useState(article.favoritesCount);
  const [likeSymbol, evaluate] = useState(`${article.favorited ? 'RedLikeSymbol.svg' : 'LikeSymbol.svg'}`);
  const [currentFavoritesCount, changeFavoritesCount] = useState(article.favoritesCount);

  return (
    <section className={classes.postPreview}>
      <div className={classes.postInfo}>
        <div className={classes.titleAndLikesContainer}>
          <Link to={`/articles/${article.slug}`} className={classes.articleTitle}>
            {article.title}
          </Link>
          <img
            src={`../../../img/${likeSymbol}`}
            alt="LikeSymbol"
            style={{ marginRight: '4px' }}
            onClick={() => {
              if (!article.favorited) {
                evaluate('RedLikeSymbol.svg');
                changeFavoritesCount(currentFavoritesCount + 1);
                likeArticle({ path: `/articles/${article.slug}/favorite`, token: userToken });
              }
              if (article.favorited) {
                likeSymbol('LikeSymbol.svg');
                changeFavoritesCount(currentFavoritesCount - 1);
                unlikeArticle({ path: `/articles/${article.slug}/favorite`, token: userToken });
              }
            }}
          />
          <span>{currentFavoritesCount}</span>
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
