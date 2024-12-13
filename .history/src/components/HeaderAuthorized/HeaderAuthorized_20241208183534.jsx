import classes from './HeaderAuthorized.module.scss';

const HeaderAuthorized = () => {
  return (
    <div className={classes.header}>
      <span>Realworld Blog</span>
      <div className={classes.headerButtonsChain}>
        <span>Sign In</span>
        <span className={classes.headerGreenButton}>Create new Article</span>
      </div>
    </div>
  );
};

export default HeaderAuthorized;
