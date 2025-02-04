import { Link } from 'react-router';

import classes from './Header.module.scss';

const Header = () => {
  const AUTHORIZED = 0;

  return (
    <div className={classes.header}>
      <span>Realworld Blog</span>
      <div className={classes.headerButtonsChain}>
        {AUTHORIZED === 0 && (
          <>
            <Link to={'/sign-in'} style={{ textDecoration: 'none', color: 'black' }} formType={'sign-in'}>
              Sign In
            </Link>
            <Link to={'/sign-up'} className={classes.headerGreenButton} formType={'sign-up'}>
              Sign Up
            </Link>
          </>
        )}
        {AUTHORIZED === 1 && (
          <>
            <Link to={'/articleForm'} className={classes.headerGreenButton}>
              Create article
            </Link>
            <div style={{ display: 'flex', alignItems: 'center', gap: '13px' }}>
              <span>John Doe</span>
              <img src="../../../img/John Doe.png" height={46} width={46} alt="author Image" />
            </div>
            <span className={classes.headerLogOutButton}>Log Out</span>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
