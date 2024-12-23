import classes from './DeleteArticleModalWindow.module.scss';

const DeleteArticleModalWindow = () => {
  return (
    <dialog className={classes.contentBox}>
      <div style={{ display: 'flex', gap: '8px' }}>
        <img src="../../../public/img/AttentionSymbol.svg" height={14} width={14} alt="exclamation mark" />
        Are you sure to delete this article?
      </div>
      <span></span>
    </dialog>
  );
};

export default DeleteArticleModalWindow;
