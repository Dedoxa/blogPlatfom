import classes from './DeleteArticleModalWindow.module.scss';

const DeleteArticleModalWindow = () => {
  return (
    <>
      <dialog id="modal" aria-labelledby="modal-text" className={classes.contentBox}>
        <div style={{ display: 'flex', gap: '8px' }}>
          <img src="../../../public/img/AttentionSymbol.svg" height={14} width={14} alt="exclamation mark" />
          <span id="modal-text">Are you sure to delete this article?</span>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <span className={classes.modalNotFocusedButton}>No</span>
          <span className={classes.modalFocusedButton}>Yes</span>
        </div>
      </dialog>
    </>
  );
};

export default DeleteArticleModalWindow;
