import { Flex } from 'antd';
import { Link } from 'react-router';
import { format } from 'date-fns';
import { useSelector } from 'react-redux';

import { Tags } from '../Tags/Tags.jsx';
import store from '../../redux/store.js';
import * as actions from '../../redux/actions.js';
import { useLazyGetParticularArticleQuery } from '../../AppAPI.js';

import classes from './Post.module.scss';

const Post = (data) => {
  const currentSlug = useSelector((state) => state.currentSlug);
  const currentArticle = useSelector((state) => state.currentParticularArticle);
  const [triggerFetchData, newFullArticle] = useLazyGetParticularArticleQuery();
  const article = data.data;
  const formattedCreatedAt = format(article.createdAt, 'MMMM dd, y');

  return (
    <section className={classes.postPreview}>
      <div className={classes.postInfo}>
        <div className={classes.titleAndLikesContainer}>
          <Link
            to={`/${article.slug}`}
            className={classes.articleTitle}
            onClick={() => {
              // store.dispatch(actions.SET_NEW_SLUG(article.slug));
              // console.log('currentSlug and article.slug: ', currentSlug, ', ', article.slug);
              // triggerFetchData(currentSlug);
              console.log('article.slug: ', article.slug);
              triggerFetchData(`articles/${article.slug}`);
              // store.dispatch(actions.SET_PARTICULAR_ARTICLE(newFullArticle));
              setTimeout(function () {
                console.log('newFullArticle: ', newFullArticle);
              }, 3000);
            }}
          >
            {article.title}
          </Link>
          <img src="../../../img/LikeSymbol.svg" alt="LikeSymbol" style={{ marginRight: '4px' }} />
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
