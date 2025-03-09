import { useLocation, useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

import { useDeleteArticleMutation } from '../../AppAPI.js';
import store from '../../redux/store.js';
import * as actions from '../../redux/actions.js';

import classes from './DeleteArticleModalWindow.module.scss';

const DeleteArticleModalWindow = () => {
  let userToken = useSelector((state) => state.logInUserData?.token);
  if (!userToken) userToken = window.localStorage.getItem('token');

  const { pathname } = useLocation();
  const [deleteArticle] = useDeleteArticleMutation();
  const navigate = useNavigate();

  return (
    <>
      <dialog id="modal" aria-labelledby="modal-text" className={classes.contentBox}>
        <div style={{ display: 'flex', gap: '8px' }}>
          <img src="../../../img/AttentionSymbol.svg" height={14} width={14} alt="exclamation mark" />
          <span id="modal-text">Are you sure to delete this article?</span>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <span
            className={classes.modalButton}
            onClick={() => {
              store.dispatch(actions.HIDE_MODAL);
            }}
          >
            No
          </span>
          <span
            className={classes.modalButton}
            onClick={() => {
              deleteArticle({ token: userToken, path: pathname });
              store.dispatch(actions.HIDE_MODAL);
              navigate('/');
            }}
          >
            Yes
          </span>
        </div>
      </dialog>
    </>
  );
};

export default DeleteArticleModalWindow;
