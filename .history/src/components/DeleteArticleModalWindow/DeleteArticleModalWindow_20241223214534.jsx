import classes from './DeleteArticleModalWindow.module.scss';

const DeleteArticleModalWindow = () => {
  return (
    <dialog className={classes.contentBox}>
        <img src="../../../public/img/AttentionSymbol.svg" height={14} width={14} alt="attention " />
        Are you sure to delete this article?
    </dialog>
  );
};

export default DeleteArticleModalWindow;
