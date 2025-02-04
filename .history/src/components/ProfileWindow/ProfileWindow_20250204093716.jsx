import { Checkbox } from 'antd';
import { useLocation } from 'react-router';
import { useSelector } from 'react-redux';

import * as actions from '../../redux/actions';
import store from '../../redux/store';

import classes from './ProfileWindow.module.scss';

const ProfileWindow = () => {
  // const { form_type } = useParams();
  const { pathname } = useLocation();
  const FORM_TYPE = pathname;

  const PasswordInInput = useSelector((state) => state.PasswordInInput);
  const passwordClasses = [classes.textInput];
  let showPasswordWarning = 0;
  if (!passwordClasses.includes(classes.textRedInput) && PasswordInInput.length > 0 && PasswordInInput.length < 6) {
    passwordClasses.push(classes.textRedInput);
    showPasswordWarning = 1;
  } else {
    passwordClasses.filter((element) => element === classes.textInput);
  }

  const PasswordRepetitionInInput = useSelector((state) => state.PasswordRepetitionInInput);
  const PasswordRepetitionInInputClasses = [classes.textInput];
  let showPasswordRepetitionWarning = 0;
  if (PasswordRepetitionInInput !== PasswordInInput) {
    PasswordRepetitionInInputClasses.push(classes.textRedInput);
    showPasswordRepetitionWarning = 1;
  } else {
    PasswordRepetitionInInputClasses.filter((element) => element === classes.textInput);
  }

  return (
    <div className={classes.contentBox}>
      {FORM_TYPE === 'sign_up' && (
        <>
          <h2>Create new account</h2>
          <form action="#" method="get">
            <label htmlFor="username">
              <p>Username</p>
              <input id="username" className={classes.textInput} type="text" placeholder="Username" required />
            </label>
            <label htmlFor="email">
              <p>Email address</p>
              <input id="email" className={classes.textInput} type="email" placeholder="Email address" required />
            </label>
            <label htmlFor="password">
              <p>Password</p>
              <input
                id="password"
                className={passwordClasses.join(' ')}
                type="password"
                placeholder="Password"
                minLength={6}
                // onChange={(value) => store.dispatch({ type: 'CHANGE_PASSWORD_IN_INPUT', value: value.target.value })}
                onChange={(value) => store.dispatch(actions.CHANGE_PASSWORD_IN_INPUT(value.target.value))}
                required
              />
              {showPasswordWarning === 1 && (
                <p className={classes.inputWarning}>Your password needs to be at least 6 characters.</p>
              )}
            </label>
            <label htmlFor="passwordRepeat">
              <p>Repeat Password</p>
              <input
                id="passwordRepeat"
                className={PasswordRepetitionInInputClasses.join(' ')}
                type="password"
                placeholder="Password"
                minLength={6}
                onChange={(value) =>
                  store.dispatch({ type: 'CHANGE_PASSWORD_REPETITION_IN_INPUT', value: value.target.value })
                }
                required
              />
              {showPasswordRepetitionWarning === 1 && <p className={classes.inputWarning}>Passwords must match</p>}
            </label>
            <label className={classes.agreementBox} htmlFor="agreement">
              <Checkbox style={{ marginRight: '10px' }} id="agreement" required />
              <span className={classes.agreementText}>I agree to the processing of my personal information</span>
            </label>
            <input className={classes.submitButton} type="submit" value={'Create'} />
          </form>
        </>
      )}
      {FORM_TYPE === 'sign_in' && (
        <>
          <h2>Sign In</h2>
          <form action="#" method="get">
            <label htmlFor="email">
              <p>Email address</p>
              <input id="email" className={classes.textInput} type="email" placeholder="Email address" required />
            </label>
            <label htmlFor="password">
              <p>Password</p>
              <input id="password" className={classes.textInput} type="password" placeholder="Password" required />
            </label>
            <input className={classes.submitButton} type="submit" value={'Login'} />
          </form>
        </>
      )}
      {FORM_TYPE === 'edit' && (
        <>
          <h2>Edit Profile</h2>
          <form action="#" method="get">
            <label htmlFor="username">
              <p>Username</p>
              <input id="username" className={classes.textInput} type="text" placeholder="Username" required />
            </label>
            <label htmlFor="email">
              <p>Email address</p>
              <input id="email" className={classes.textInput} type="email" placeholder="Email address" required />
            </label>
            <label htmlFor="password">
              <p>New password</p>
              <input
                id="password"
                className={classes.textInput}
                type="password"
                placeholder="Password"
                minLength={6}
                required
              />
            </label>
            <label htmlFor="avatarImage">
              <p>Avatar image (url)</p>
              <input id="avatarImage" className={classes.textInput} type="url" placeholder="Avatar image" required />
            </label>
            <input className={classes.submitButton} type="submit" value={'Save'} />
          </form>
        </>
      )}
      {FORM_TYPE === 0 && (
        <div className={classes.signInBox}>
          <span>Already have an account?</span>
          <a href="#">Sign in.</a>
        </div>
      )}
    </div>
  );
};

export default ProfileWindow;
