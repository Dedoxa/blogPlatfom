import classes from './HeaderAuthorized.module.scss';

const HeaderAuthorized = () => {
  return (
    <div className={classes.header}>
      <span>Realworld Blog</span>
      <div className={classes.headerButtonsChain}>
        <span className={classes.headerGreenButton}>Create article</span>
        <span>Sign In</span>
      </div>
    </div>
  );
};

export default HeaderAuthorized;
