import classes from './Header.module.scss';

const Header = () => {
  return (
    <div className={classes.header}>
      <span>Realworld Blog</span>
      <div>
        <span>Sign in</span>
        <span></span>
      </div>
    </div>
  );
};

export default Header;
