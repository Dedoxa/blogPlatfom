import { Checkbox } from 'antd';
import { useLocation, Link } from 'react-router';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import * as actions from '../../redux/actions';
import store from '../../redux/store';

import classes from './ProfileWindow.module.scss';

const ProfileWindow = () => {
  const { pathname } = useLocation();
  const { register, handleSubmit, formState: {errors} } = useForm();
  const FORM_TYPE = pathname;

  const loginInInput = useSelector((state) => state.loginInInput);
  const loginClasses = [classes.textInput];
  let showShortLoginWarning = 0;
  let showLongLoginWarning = 0;
  if (!loginClasses.includes(classes.textRedInput) && loginInInput.length > 0) {
    if (loginInInput.length < 3) {
      loginClasses.push(classes.textRedInput);
      showShortLoginWarning = 1;
    }
    if (loginInInput.length > 20) {
      loginClasses.push(classes.textRedInput);
      showLongLoginWarning = 1;
    }
  } else {
    loginClasses.filter((element) => element === classes.textInput);
  }

  const passwordInInput = useSelector((state) => state.passwordInInput);
  const passwordClasses = [classes.textInput];
  let showShortPasswordWarning = 0;
  let showLongPasswordWarning = 0;
  if (!passwordClasses.includes(classes.textRedInput) && passwordInInput.length > 0) {
    if (passwordInInput.length < 6) {
      passwordClasses.push(classes.textRedInput);
      showShortPasswordWarning = 1;
    }
    if (passwordInInput.length > 40) {
      passwordClasses.push(classes.textRedInput);
      showLongPasswordWarning = 1;
    }
  } else {
    passwordClasses.filter((element) => element === classes.textInput);
  }

  const passwordRepetitionInInput = useSelector((state) => state.passwordRepetitionInInput);
  const passwordRepetitionInInputClasses = [classes.textInput];
  let showPasswordRepetitionWarning = 0;
  if (passwordRepetitionInInput !== passwordInInput) {
    passwordRepetitionInInputClasses.push(classes.textRedInput);
    showPasswordRepetitionWarning = 1;
  } else {
    passwordRepetitionInInputClasses.filter((element) => element === classes.textInput);
  }

  const warningsSumm =
    showShortLoginWarning +
    showLongLoginWarning +
    showShortPasswordWarning +
    showLongPasswordWarning +
    showPasswordRepetitionWarning;

  return (
    <div className={classes.contentBox}>
      {FORM_TYPE === '/sign-up' && (
        <>
          <h2>Create new account</h2>
          <form
            onSubmit={handleSubmit((data) => {
              console.log(data);
            })}
            action="#"
            method="post"
          >
            <label htmlFor="username">
              <p>Username</p>
              <input
                {...register('username')}
                className={loginClasses.join(' ')}
                type="text"
                placeholder="Username"
                minLength={3}
                maxLength={20}
                onChange={(value) => store.dispatch(actions.CHANGE_LOGIN_IN_INPUT(value.target.value))}
                required
              />
              {showShortLoginWarning === 1 && (
                <p className={classes.inputWarning}>Your login needs to be at least 3 characters.</p>
              )}
              {showLongLoginWarning === 1 && (
                <p className={classes.inputWarning}>Your login needs to be 20 characters or less.</p>
              )}
            </label>
            <label htmlFor="email">
              <p>Email address</p>
              <input
                {...register('email')}
                className={classes.textInput}
                type="email"
                placeholder="Email address"
                required
              />
            </label>
            <label htmlFor="password">
              <p>Password</p>
              <input
                {...register('password')}
                className={passwordClasses.join(' ')}
                type="password"
                placeholder="Password"
                minLength={6}
                maxLength={40}
                onChange={(value) => store.dispatch(actions.CHANGE_PASSWORD_IN_INPUT(value.target.value))}
                required
              />
              {showShortPasswordWarning === 1 && (
                <p className={classes.inputWarning}>Your password needs to be at least 6 characters.</p>
              )}
              {showLongPasswordWarning === 1 && (
                <p className={classes.inputWarning}>Your password needs to be 40 characters or less.</p>
              )}
            </label>
            <label htmlFor="passwordRepeat">
              <p>Repeat Password</p>
              <input
                {...register('passwordRepeat')}
                className={passwordRepetitionInInputClasses.join(' ')}
                type="password"
                placeholder="Password"
                minLength={6}
                maxLength={40}
                onChange={(value) => store.dispatch(actions.CHANGE_PASSWORD_REPETITION_IN_INPUT(value.target.value))}
                required
              />
              {showPasswordRepetitionWarning === 1 && <p className={classes.inputWarning}>Passwords must match</p>}
            </label>
            <label className={classes.agreementBox} htmlFor="agreement">
              <Checkbox style={{ marginRight: '10px' }} id="agreement" required />
              <span className={classes.agreementText}>I agree to the processing of my personal information</span>
            </label>
            {warningsSumm <= 0 && <input className={classes.submitButton} type="submit" value={'Create'} />}
            {warningsSumm > 0 && (
              <input className={classes.submitDisabledButton} type="submit" value={'Create'} disabled />
            )}
          </form>
        </>
      )}
      {FORM_TYPE === '/profile' && (
        <>
          <h2>Edit Profile</h2>
          <form
            onSubmit={handleSubmit((data) => {
              console.log(data);
            })}
            action="#"
            method="post"
          >
            <label htmlFor="username">
              <p>Username</p>
              <input
                {...register('username', {
                  required: true,
                  type: 'text',
                  placeholder: 'Username',
                  minLength: 3,
                  maxLength: 20,
                })}
                className={loginClasses.join(' ')}
                onChange={(value) => store.dispatch(actions.CHANGE_LOGIN_IN_INPUT(value.target.value))}
              />
              {showShortLoginWarning === 1 && (
                <p className={classes.inputWarning}>Your login needs to be at least 3 characters.</p>
              )}
              {showLongLoginWarning === 1 && (
                <p className={classes.inputWarning}>Your login needs to be 20 characters or less.</p>
              )}
            </label>
            <label htmlFor="email">
              <p>Email address</p>
              <input
                {...register('email')}
                className={classes.textInput}
                type="email"
                placeholder="Email address"
                required
              />
            </label>
            <label htmlFor="password">
              <p>New password</p>
              <input
                {...register('password')}
                className={passwordClasses.join(' ')}
                type="password"
                placeholder="Password"
                minLength={6}
                maxLength={40}
                onChange={(value) => store.dispatch(actions.CHANGE_PASSWORD_IN_INPUT(value.target.value))}
                required
              />
              {showShortPasswordWarning === 1 && (
                <p className={classes.inputWarning}>Your password needs to be at least 6 characters.</p>
              )}
              {showLongPasswordWarning === 1 && (
                <p className={classes.inputWarning}>Your password needs to be 40 characters or less.</p>
              )}
            </label>
            <label htmlFor="avatarImage">
              <p>Avatar image (url)</p>
              <input
                {...register('avatarImage')}
                // className={classes.textInput}
                type="url"
                placeholder="Avatar image"
                required
              />
            </label>
            {warningsSumm <= 0 && <input className={classes.submitButton} type="submit" value={'Save'} />}
            {warningsSumm > 0 && (
              <input className={classes.submitDisabledButton} type="submit" value={'Save'} disabled />
            )}
          </form>
        </>
      )}
      {FORM_TYPE === '/sign-in' && (
        <>
          <h2>Sign In</h2>
          <form
            onSubmit={handleSubmit((data) => {
              console.log(data);
            })}
            action="#"
            method="post"
          >
            <label htmlFor="email">
              <p>Email address</p>
              <input
                {...register('email')}
                className={classes.textInput}
                type="email"
                placeholder="Email address"
                required
              />
            </label>
            <label htmlFor="password">
              <p>Password</p>
              <input
                {...register('password')}
                className={classes.textInput}
                type="password"
                placeholder="Password"
                required
              />
            </label>
            <input className={classes.submitButton} type="submit" value={'Login'} />
          </form>
        </>
      )}
      {FORM_TYPE === 0 && (
        <div className={classes.signInBox}>
          <span>Already have an account?</span>
          <Link to={'/sign-in'}>Sign in.</Link>
        </div>
      )}
    </div>
  );
};

export default ProfileWindow;
