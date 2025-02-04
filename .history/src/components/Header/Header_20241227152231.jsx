import classes from './Header.module.scss';

import { Link } from 'react-router';

const Header = () => {
  const AUTHORIZED = 0;

  return (
    <div className={classes.header}>
      <span>Realworld Blog</span>
      <div className={classes.headerButtonsChain}>
        {AUTHORIZED === 0 && (
          <>
            <Link to={'/authorisation'}>Sign In</Link>
            <span className={classes.headerGreenButton}>Sign Up</span>
          </>
        )}
        {AUTHORIZED === 1 && (
          <>
            <span className={classes.headerGreenButton}>Create article</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '13px' }}>
              <span>John Doe</span>
              <img src="../../../public/img/John Doe.png" height={46} width={46} alt="author Image" />
            </div>
            <span className={classes.headerLogOutButton}>Log Out</span>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
