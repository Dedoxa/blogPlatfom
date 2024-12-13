import classes from './Header.module.scss';

const Header = () => {
  return (
    <div className={classes.header}>
      <span>Realworld Blog</span>
      <div>
        <span>Sign In</span>
        <span>Sign Up</span>
      </div>
    </div>
  );
};

export default Header;
