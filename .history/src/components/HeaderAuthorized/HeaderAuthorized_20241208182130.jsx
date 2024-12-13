import classes from './HeaderUnauthorized.module.scss';

const HeaderUnauthorized = () => {
  return (
    <div className={classes.header}>
      <span>Realworld Blog</span>
      <div className={classes.headerButtonsChain}>
        <span>Sign In</span>
        <span className={classes.headerGreenButton}>Sign Up</span>
      </div>
    </div>
  );
};

export default HeaderUnauthorized;
