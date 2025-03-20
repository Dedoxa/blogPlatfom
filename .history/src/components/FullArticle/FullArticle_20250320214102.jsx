import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router';
import { Flex, Spin } from 'antd';
import Markdown from 'markdown-to-jsx';
import { format } from 'date-fns';

import { Tags } from '../Tags/Tags.jsx';
import DeleteArticleModalWindow from '../DeleteArticleModalWindow/DeleteArticleModalWindow.jsx';
import { useLikeArticleMutation, useUnlikeArticleMutation, useGetParticularArticleQuery } from '../../AppAPI.js';
import store from '../../redux/store.js';
import * as actions from '../../redux/actions.js';

import classes from './FullArticle.module.scss';

const FullArticle = () => {
  const { pathname } = useLocation();

  const { data: result, error: fetchingError, isLoading: loadingArticles } = useGetParticularArticleQuery(pathname);
  const article = result?.article;
  const formattedCreatedAt = article ? format(article?.createdAt, 'MMMM dd, y') : article?.createdAt;

  let userToken = useSelector((state) => state.logInUserData?.token);
  if (!userToken) userToken = window.localStorage.getItem('token');
  let userName = useSelector((state) => state.logInUserData?.username);
  if (!userName) userName = window.localStorage.getItem('username');
  const modalIsVisible = useSelector((state) => state.modalIsVisible);

  const likeSymbol = article?.favorited ? 'RedLikeSymbol.svg' : 'LikeSymbol.svg';

  const [likeArticle] = useLikeArticleMutation();
  const [unlikeArticle] = useUnlikeArticleMutation();

  return (
    <>
      {loadingArticles && <Spin size="large" />}
      {fetchingError && <h1>Error in fetching data.</h1> && console.log(fetchingError)}
      {!loadingArticles && (
        <section className={classes.fullPost}>
          <div className={classes.postInfo}>
            <div>
              <div className={classes.titleAndLikesContainer}>
                <span className={classes.articleTitle}>{article?.title}</span>
                <img
                  src={`../../../img/${likeSymbol}`}
                  alt="LikeSymbol"
                  style={{ marginRight: '4px' }}
                  onClick={() => {
                    if (userToken) {
                      if (!article.favorited) {
                        likeArticle({ path: `/articles/${article.slug}/favorite`, token: userToken });
                      }
                      if (article.favorited) {
                        unlikeArticle({ path: `/articles/${article.slug}/favorite`, token: userToken });
                      }
                    }
                  }}
                />
                <span>{article?.favoritesCount}</span>
              </div>
              <div className={classes.tagsContainer}>
                <Flex wrap>
                  <Tags tagsArray={article?.tagList} />
                </Flex>
              </div>
            </div>
            <div className={classes.authorInfo}>
              <div className={classes.NameAndDateContainer}>
                <span className={classes.Name}>{article?.author?.username}</span>
                <span className={classes.Date}>{formattedCreatedAt}</span>
              </div>
              <div className={classes.imgCrop}>
                <img src={article?.author?.image} height={46} alt="author Image" />
              </div>
            </div>
          </div>
          <div className={classes.postContent}>
            <div className={classes.postDescription}>{article?.description}</div>
            {userToken && userName === article?.author?.username && (
              <div style={{ display: 'flex', gap: '12px' }}>
                <span
                  className={classes.fullArticleRedButton}
                  onClick={() => {
                    store.dispatch(actions.SHOW_MODAL);
                  }}
                >
                  Delete
                </span>
                {modalIsVisible && <DeleteArticleModalWindow />}
                <Link to={`${pathname}/edit`} className={classes.fullArticleGreenButton} state={pathname}>
                  Edit
                </Link>
              </div>
            )}
          </div>
          <Markdown className={classes.postText} options={{ wrapper: 'article', forceWrapper: 'true' }}>
            {article?.body}
          </Markdown>
        </section>
      )}
    </>
  );
};

export default FullArticle;
