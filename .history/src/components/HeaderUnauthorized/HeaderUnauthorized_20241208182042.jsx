import classes from './HeaderUnauthorized.module.scss';

const Header = () => {
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

export default Header;
