import { Checkbox } from 'antd';
import { useLocation, Link } from 'react-router';
import { useForm } from 'react-hook-form';

// import * as actions from '../../redux/actions';
// import store from '../../redux/store';

import classes from './ProfileWindow.module.scss';

const ProfileWindow = () => {
  const { pathname } = useLocation();
  const { register, handleSubmit, formState } = useForm();
  console.log(formState);

  const FORM_TYPE = pathname;

  const loginClasses = [classes.textInput];
  const passwordClasses = [classes.textInput];
  const passwordRepetitionInInputClasses = [classes.textInput];

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
                required
              />
              <p className={classes.inputWarning}>Your login needs to be at least 3 characters.</p>
              <p className={classes.inputWarning}>Your login needs to be 20 characters or less.</p>
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
                required
              />
              <p className={classes.inputWarning}>Your password needs to be at least 6 characters.</p>
              <p className={classes.inputWarning}>Your password needs to be 40 characters or less.</p>
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
                required
              />
              <p className={classes.inputWarning}>Passwords must match</p>
            </label>
            <label className={classes.agreementBox} htmlFor="agreement">
              <Checkbox
                {...register('agreementToProcessingPersonalData')}
                style={{ marginRight: '10px' }}
                id="agreement"
                required
              />
              <input
                {...register('agreementToPPI')}
                type="checkbox"
                style={{ margin: '0', marginRight: '10px', transform: 'scale(1.175)' }}
                required
              />
              <span className={classes.agreementText}>I agree to the processing of my personal information</span>
            </label>
            <input className={classes.submitButton} type="submit" value={'Create'} />
            {/* <input className={classes.submitDisabledButton} type="submit" value={'Create'} disabled /> */}
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
                {...register('username')}
                className={loginClasses.join(' ')}
                type="text"
                required
                placeholder="Username"
                minLength={3}
                maxLength={20}
              />
              <p className={classes.inputWarning}>Your login needs to be at least 3 characters.</p>
              <p className={classes.inputWarning}>Your login needs to be 20 characters or less.</p>
            </label>
            <label htmlFor="email">
              <p>Email address</p>
              <input
                {...register('email')}
                className={classes.textInput}
                type="email"
                required
                placeholder="Email address"
              />
            </label>
            <label htmlFor="password">
              <p>New password</p>
              <input
                {...register('password')}
                className={passwordClasses.join(' ')}
                type="password"
                required
                placeholder="Password"
                minLength={6}
                maxLength={40}
              />
              <p className={classes.inputWarning}>Your password needs to be at least 6 characters.</p>
              <p className={classes.inputWarning}>Your password needs to be 40 characters or less.</p>
            </label>
            <label htmlFor="avatarImage">
              <p>Avatar image (url)</p>
              <input
                {...register('avatarImage')}
                className={classes.textInput}
                type="url"
                required
                placeholder="Avatar image"
              />
            </label>
            <input className={classes.submitButton} type="submit" value={'Save'} />
            {/* <input className={classes.submitDisabledButton} type="submit" value={'Save'} disabled /> */}
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
