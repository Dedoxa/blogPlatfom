import classes from './Header.module.scss';

const Header = () => {
  const AUTHORIZED = 1;

  return (
    <div className={classes.header}>
      <span>Realworld Blog</span>
      <div className={classes.headerButtonsChain}>
        {AUTHORIZED === 0 && (
          <>
            <span>Sign In</span>
            <span className={classes.headerGreenButton}>Sign Up</span>
          </>
        )}
        {AUTHORIZED === 1 && (
          <>
            <span className={classes.headerGreenButton}>Create article</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '13px' }}>
              <span>John Doe</span>
              <img src="../../../public/img/John Doe.png" width={46} alt="author Image" />
            </div>
            <span className={classes.headerLogOutButton}>Log Out</span>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
