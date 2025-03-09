import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Flex } from 'antd';
import Markdown from 'markdown-to-jsx';
import { format } from 'date-fns';

import { Tags } from '../Tags/Tags.jsx';
import DeleteArticleModalWindow from '../DeleteArticleModalWindow/DeleteArticleModalWindow.jsx';
import { useGetParticularArticleQuery } from '../../AppAPI.js';
import store from '../../redux/store.js';
import * as actions from '../../redux/actions.js';

import classes from './FullArticle.module.scss';

const FullArticle = () => {
  let userToken = useSelector((state) => state.logInUserData?.token);
  if (!userToken) userToken = window.localStorage.getItem('token');
  let userName = useSelector((state) => state.logInUserData?.username);
  if (!userName) userName = window.localStorage.getItem('username');
  const modalIsVisible = useSelector((state) => state.modalIsVisible);

  const { slug } = useParams();
  const { data: fullArticle } = useGetParticularArticleQuery(slug);
  const article = fullArticle?.article;
  let formattedCreatedAt;
  if (article) formattedCreatedAt = format(fullArticle?.article.createdAt, 'MMMM dd, y');

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
              <Tags tagsArray={article?.tagList} />
            </Flex>
          </div>
        </div>
        <div className={classes.authorInfo}>
          <div className={classes.NameAndDateContainer}>
            <span className={classes.Name}>{article?.author?.username}</span>
            <span className={classes.Date}>{formattedCreatedAt}</span>
          </div>
          <img src={article?.author?.image} height={46} width={46} alt="author Image" />
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
            <span className={classes.fullArticleGreenButton}>Edit</span>
          </div>
        )}
      </div>
      <Markdown className={classes.postText} options={{ wrapper: 'article', forceWrapper: 'true' }}>
        {article?.body}
      </Markdown>
      {/* <div className={classes.postText}>{article?.body}</div> */}
    </section>
  );
};

export default FullArticle;
