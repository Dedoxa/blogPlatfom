import classes from './DeleteArticleModalWindow.module.scss';

const DeleteArticleModalWindow = () => {
  return (
    <dialog className={classes.contentBox}>
        Are you sure to delete this article?
    </dialog>
  );
};

export default DeleteArticleModalWindow;
