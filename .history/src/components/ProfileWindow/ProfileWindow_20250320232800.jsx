import { useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';

import { useRegisterUserMutation, useLogInUserMutation, useUpdateUserMutation } from '../../AppAPI';
import { stringifyWithFirstCapitalLetter } from '../../redux/supportFunctions.js';
import store from '../../redux/store';
import * as actions from '../../redux/actions.js';

import classes from './ProfileWindow.module.scss';

const ProfileWindow = () => {
  const { pathname } = useLocation();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({ shouldUnregister: true });

  const [registerUser, registerResult] = useRegisterUserMutation();
  const [logInUser, logInResult] = useLogInUserMutation();
  const [updateUser, updateResult] = useUpdateUserMutation();

  const navigate = useNavigate();
  console.log(updateResult);

  useEffect(() => {
    if (registerResult?.isSuccess === true && pathname === '/sign-up') {
      registerResult.reset();
      navigate('/sign-in');
    }
    if (updateResult?.isSuccess === true && pathname === '/profile') {
      store.dispatch(actions.SET_USER_DATA(updateResult?.data?.user));
      window.localStorage.setItem('token', updateResult?.data?.user?.token);
      window.localStorage.setItem('username', updateResult?.data?.user?.username);
      updateResult.reset();
      navigate('/');
    }
    if (logInResult?.isSuccess === true && pathname === '/sign-in') {
      store.dispatch(actions.SET_USER_DATA(logInResult?.data?.user));
      window.localStorage.setItem('token', logInResult?.data?.user?.token);
      window.localStorage.setItem('username', logInResult?.data?.user?.username);
      window.localStorage.setItem('image', logInResult?.data?.user?.image);
      logInResult.reset();
      navigate('/');
    }
  }, [registerResult, updateResult, logInResult, pathname, navigate]);

  const FORM_TYPE = pathname;

  const loginClasses = [classes.textInput];
  if (
    !loginClasses.includes(classes.textRedInput) &&
    (errors.username?.message ||
      registerResult?.error?.data?.errors?.username ||
      updateResult?.error?.data?.errors?.username)
  ) {
    loginClasses.push(classes.textRedInput);
  }
  if (
    loginClasses.includes(classes.textRedInput) &&
    !errors.username?.message &&
    !registerResult?.error?.data?.errors?.username &&
    !updateResult?.error?.data?.errors?.username
  ) {
    loginClasses.pop();
  }

  const emailClasses = [classes.textInput];
  if (
    !emailClasses.includes(classes.textRedInput) &&
    (errors.email?.message || registerResult?.error?.data?.errors?.email)
  ) {
    emailClasses.push(classes.textRedInput);
  }
  if (
    emailClasses.includes(classes.textRedInput) &&
    !errors.email?.message &&
    !registerResult?.error?.data?.errors?.email
  ) {
    emailClasses.pop();
  }

  const passwordClasses = [classes.textInput];
  if (!passwordClasses.includes(classes.textRedInput) && errors.password?.message) {
    passwordClasses.push(classes.textRedInput);
  }
  if (passwordClasses.includes(classes.textRedInput) && !errors.password?.message) {
    passwordClasses.pop();
  }

  const passwordRepetitionInInputClasses = [classes.textInput];
  if (!passwordRepetitionInInputClasses.includes(classes.textRedInput) && errors.passwordRepeat?.message) {
    passwordRepetitionInInputClasses.push(classes.textRedInput);
  }
  if (passwordRepetitionInInputClasses.includes(classes.textRedInput) && !errors.passwordRepeat?.message) {
    passwordRepetitionInInputClasses.pop();
  }

  return (
    <div className={classes.contentBox}>
      {FORM_TYPE === '/sign-up' && (
        <>
          <h2>Create new account</h2>
          <form
            onSubmit={handleSubmit((data) => {
              registerUser(data);
            })}
            action="#"
            method="post"
          >
            <label htmlFor="username">
              <p>Username</p>
              <input
                {...register('username', {
                  required: 'Fill in the "Username" field.',
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
              {registerResult.isError && (
                <p className={classes.inputWarning}>
                  {stringifyWithFirstCapitalLetter(registerResult?.error?.data?.errors?.username)}
                </p>
              )}
            </label>
            <label htmlFor="email">
              <p>Email address</p>
              <input
                {...register('email', {
                  required: 'Fill in the "Email address" field.',
                  pattern: {
                    value: /^[a-z][a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                    message: 'Invalid email address.',
                  },
                })}
                className={emailClasses.join(' ')}
                placeholder="Email address"
              />
              <p className={classes.inputWarning}>{errors.email?.message}</p>
              {registerResult.isError && (
                <p className={classes.inputWarning}>
                  {stringifyWithFirstCapitalLetter(registerResult?.error?.data?.errors?.email)}
                </p>
              )}
            </label>
            <label htmlFor="password">
              <p>Password</p>
              <input
                {...register('password', {
                  required: 'Fill in the "Password" field.',
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
                  required: 'Fill in the "Repeat password" field.',
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
                    required: 'Agree to the terms of data processing.',
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
          <p className={classes.questionText} style={{ marginTop: '10px' }}>
            Already have an account? <Link to={'/sign-in'}>Sign in</Link>.
          </p>
        </>
      )}
      {FORM_TYPE === '/profile' && (
        <>
          <h2>Edit Profile</h2>
          <form
            onSubmit={handleSubmit((data) => {
              const dataObject = { token: window.localStorage.getItem('token'), user: data };
              updateUser(dataObject);
            })}
            action="#"
            method="post"
          >
            <label htmlFor="username">
              <p>Username</p>
              <input
                {...register('username', {
                  required: 'Fill in the "Username" field.',
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
              {updateResult?.error?.data?.errors?.username && (
                <p className={classes.inputWarning}>
                  {stringifyWithFirstCapitalLetter(updateResult?.error?.data?.errors?.username)}
                </p>
              )}
            </label>
            <label htmlFor="email">
              <p>Email address</p>
              <input
                {...register('email', {
                  required: 'Fill in the "Email address" field.',
                  pattern: {
                    value: /^[a-z][a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                    message: 'Invalid email address.',
                  },
                })}
                className={emailClasses.join(' ')}
                placeholder="Email address"
              />
              <p className={classes.inputWarning}>{errors.email?.message}</p>
              {updateResult?.error?.data?.errors?.email && (
                <p className={classes.inputWarning}>
                  {stringifyWithFirstCapitalLetter(updateResult?.error?.data?.errors?.email)}
                </p>
              )}
            </label>
            <label htmlFor="password">
              <p>New password</p>
              <input
                {...register('password', {
                  required: 'Fill in the "Password" field.',
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
            <label htmlFor="image">
              <p>{`Avatar image (url)`}</p>
              <input
                {...register('image', {
                  required: 'Fill in the "Avatar image" field.',
                  pattern: {
                    value:
                      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g,
                    message: 'Invalid url.',
                  },
                })}
                className={classes.textInput}
                placeholder="Avatar image"
              />
              <p className={classes.inputWarning}>{errors.image?.message}</p>
            </label>
            <input className={classes.submitButton} type="submit" value={'Save'} />
          </form>
        </>
      )}
      {FORM_TYPE === '/sign-in' && (
        <>
          <h2>Sign In</h2>
          <form
            onSubmit={handleSubmit((data) => {
              logInUser(data);
            })}
            action="#"
            method="post"
          >
            <label htmlFor="email">
              <p>Email address</p>
              <input
                {...register('email', {
                  required: 'Fill in the "Email address" field.',
                  pattern: {
                    value: /^[a-z][a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                    message: 'Invalid email address.',
                  },
                })}
                className={emailClasses.join(' ')}
                type="text"
                placeholder="Email address"
              />
              <p className={classes.inputWarning}>{errors.email?.message}</p>
            </label>
            <label htmlFor="password">
              <p>Password</p>
              <input
                {...register('password', {
                  required: 'Fill in the "Password" field.',
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
              {logInResult.isError && (
                <p className={classes.inputWarning}>
                  {stringifyWithFirstCapitalLetter(Object.keys(logInResult?.error?.data?.errors)[0])}{' '}
                  {logInResult?.error?.data?.errors['email or password']}
                </p>
              )}
            </label>
            <input className={classes.submitButton} type="submit" value={'Login'} />
          </form>
          <p className={classes.questionText} style={{ marginTop: '10px' }}>
            {`Don't have an account?`} <Link to={'/sign-up'}>Sign up</Link>.
          </p>
        </>
      )}
    </div>
  );
};

export default ProfileWindow;
