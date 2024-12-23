import classes from './DeleteArticleModalWindow.module.scss';

const DeleteArticleModalWindow = () => {
  return (
    <dialog className={classes.contentBox}>
        <img src="../../../public/img/AttentionSymbol.svg" width={14} alt="author Image" />
        Are you sure to delete this article?
    </dialog>
  );
};

export default DeleteArticleModalWindow;
