import { Checkbox } from 'antd';

import classes from './ProfileWindow.module.scss';

const ProfileWindow = () => {
  const FORM_TYPE = 0;

  return (
    <div className={classes.contentBox}>
      {FORM_TYPE === 0 && (
        <>
      <h2>Create new account</h2>
      <form action="#" method="get">
        <label htmlFor="username">
          <p>Username</p>
          <input id="username" className={classes.textInput} type="text" placeholder="Username" />
        </label>
        <label htmlFor="email">
          <p>Email address</p>
          <input id="email" className={classes.textInput} type="email" placeholder="Email address" />
        </label>
        <label htmlFor="password">
          <p>Password</p>
          <input id="password" className={classes.textInput} type="password" placeholder="Password" />
        </label>
        <label htmlFor="passwordRepeat">
          <p>Repeat Password</p>
          <input id="passwordRepeat" className={classes.textInput} type="password" placeholder="Password" />
        </label>
        <label className={classes.agreementBox} htmlFor="agreement">
          <Checkbox style={{ marginRight: '10px' }} id="agreement" />
          <span className={classes.agreementText}>I agree to the processing of my personal information</span>
        </label>
        <input className={classes.submitButton} type="submit" value={'Create'} />
      </form>
        </>
      )}
      <div className={classes.signInBox}>
        <span>Already have an account?</span>
        <a href="#">Sign in.</a>
      </div>
    </div>
  );
};

export default ProfileWindow;
