import { Link, useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

import store from '../../redux/store';
import { setUserData } from '../../redux/toolkitSlice';

import classes from './Header.module.scss';

const Header = () => {
  let userToken = useSelector((state) => state.toolkit.logInUserData?.token);
  if (!userToken) userToken = window.localStorage.getItem('token');
  let userName = useSelector((state) => state.toolkit.logInUserData?.username);
  if (!userName) userName = window.localStorage.getItem('username');
  let image = useSelector((state) => state.toolkit.logInUserData?.image);
  if (!image) image = window.localStorage.getItem('image');
  if (image === 'undefined' && window.localStorage.getItem('image') === 'undefined') image = '../../../img/defaultImage.jpg';

  const navigate = useNavigate();

  return (
    <div className={classes.header}>
      <Link to={'/articles'} className={classes.defaultStyle}>
        Realworld Blog
      </Link>
      <div className={classes.headerButtonsChain}>
        {!userToken && (
          <>
            <Link to={'/sign-in'} className={classes.defaultStyle}>
              Sign In
            </Link>
            <Link to={'/sign-up'} className={classes.headerGreenButton}>
              Sign Up
            </Link>
          </>
        )}
        {userToken && (
          <>
            <Link to={'/new-article'} className={classes.headerGreenButton}>
              Create article
            </Link>
            <Link to={'/profile'} style={{ display: 'flex', alignItems: 'center', gap: '13px' }}>
              <span className={classes.defaultStyle}>{userName}</span>
              <div className={classes.imgCrop}>
                <img src={image} height={46} width={46} alt="author Image" />
              </div>
            </Link>
            <span
              className={classes.headerLogOutButton}
              onClick={() => {
                window.localStorage.removeItem('token');
                window.localStorage.removeItem('image');
                window.localStorage.removeItem('username');
                store.dispatch(setUserData(null));
                navigate('/sign-in');
              }}
            >
              Log Out
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
