import { useLocation, Link } from 'react-router';
import { useForm } from 'react-hook-form';

// import * as actions from '../../redux/actions';
// import store from '../../redux/store';

import classes from './ProfileWindow.module.scss';

const ProfileWindow = () => {
  const { pathname } = useLocation();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

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
                {...register('username', {
                  required: 'Please fill in the "Username" field.',
                  minLength: {
                    value: 3,
                    message: 'Your login needs to be at least 3 characters.',
                  },
                  maxLength: {
                    value: 20,
                    message: 'Your login needs to be 20 characters or less.',
                  },
                })}
                className={loginClasses.join(' ')}
                type="text"
                placeholder="Username"
              />
              <p className={classes.inputWarning}>{errors.username?.message}</p>
            </label>
            <label htmlFor="email">
              <p>Email address</p>
              <input
                {...register('email', {
                  required: 'Please fill in the "Email address" field.',
                  type: 'email',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address.',
                  },
                })}
                className={classes.textInput}
                type="email"
                placeholder="Email address"
              />
              <p className={classes.inputWarning}>{errors.email?.message}</p>
            </label>
            <label htmlFor="password">
              <p>Password</p>
              <input
                {...register('password', {
                  required: 'Please fill in the "Password" field.',
                  minLength: {
                    value: 6,
                    message: 'Your password needs to be at least 6 characters.',
                  },
                  maxLength: {
                    value: 40,
                    message: 'Your password needs to be 40 characters or less.',
                  },
                })}
                className={passwordClasses.join(' ')}
                type="password"
                placeholder="Password"
              />
              <p className={classes.inputWarning}>{errors.password?.message}</p>
            </label>
            <label htmlFor="passwordRepeat">
              <p>Repeat Password</p>
              <input
                {...register('passwordRepeat', {
                  required: 'Please fill in the "Repeat password" field.',
                  validate: (value) => {
                    return value === getValues('password') || 'Passwords must match.';
                  },
                })}
                className={passwordRepetitionInInputClasses.join(' ')}
                type="password"
                placeholder="Password"
              />
              <p className={classes.inputWarning}>{errors.passwordRepeat?.message}</p>
            </label>
            <label className={classes.agreementBox} htmlFor="agreement">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <input
                  {...register('agreementToPPI', {
                    required: `Please confirm your consent /n to the terms of data processing.`,
                  })}
                  type="checkbox"
                  id="agreement"
                  className={classes.agreementCheckBox}
                />
                <span className={classes.agreementText}>I agree to the processing of my personal information</span>
              </div>
              <p className={classes.inputWarning}>{errors.agreementToPPI?.message}</p>
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
