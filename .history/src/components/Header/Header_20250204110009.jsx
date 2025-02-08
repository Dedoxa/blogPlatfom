import { Link } from 'react-router';

import classes from './Header.module.scss';

const Header = () => {
  const AUTHORIZED = 0;

  return (
    <div className={classes.header}>
      <Link to={'/articles'} className={classes.defaultStyle}>
        Realworld Blog
      </Link>
      <div className={classes.headerButtonsChain}>
        {AUTHORIZED === 0 && (
          <>
            <Link to={'/sign-in'} className={classes.defaultStyle}>
              Sign In
            </Link>
            <Link to={'/sign-up'} className={classes.headerGreenButton}>
              Sign Up
            </Link>
          </>
        )}
        {AUTHORIZED === 1 && (
          <>
            <Link to={'/articleForm'} className={classes.headerGreenButton}>
              Create article
            </Link>
            <Link to={'/profile'} style={{ display: 'flex', alignItems: 'center', gap: '13px' }}>
              <span className={classes.defaultStyle}>John Doe</span>
              <img src="../../../img/John Doe.png" height={46} width={46} alt="author Image" />
            </Link>
            <span className={classes.headerLogOutButton}>Log Out</span>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
