import { useLocation } from 'react-router';
import { useSelector } from 'react-redux';

import store from '../../redux/store.js';
import * as actions from '../../redux/actions.js';

import classes from './DeleteArticleModalWindow.module.scss';

const DeleteArticleModalWindow = () => {
  let userToken = useSelector((state) => state.logInUserData?.token);
  if (!userToken) userToken = window.localStorage.getItem('token');

  const { pathname } = useLocation();

  return (
    <>
      <dialog id="modal" aria-labelledby="modal-text" className={classes.contentBox}>
        <div style={{ display: 'flex', gap: '8px' }}>
          <img src="../../../public/img/AttentionSymbol.svg" height={14} width={14} alt="exclamation mark" />
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
              console.log(pathname);
              // store.dispatch(actions.HIDE_MODAL);
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
