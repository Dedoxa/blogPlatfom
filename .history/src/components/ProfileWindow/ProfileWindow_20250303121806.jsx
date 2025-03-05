import { useLocation, Link } from 'react-router';
import { useForm } from 'react-hook-form';
import { useRegisterUserMutation, useLoginUserMutation, useUpdateUserMutation } from '../../AppAPI';

import classes from './ProfileWindow.module.scss';

const ProfileWindow = () => {
  const { pathname } = useLocation();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const { data: result, error: fetchingError, isLoading: loadingArticles } = useGetPostsQuery(currentPage);

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
                className={classes.textInput}
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
              console.log(data);
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
                className={classes.textInput}
                placeholder="Email address"
              />
              <p className={classes.inputWarning}>{errors.email?.message}</p>
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
            <label htmlFor="avatarImage">
              <p>{`Avatar image (url)`}</p>
              <input
                {...register('avatarImage', {
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
              <p className={classes.inputWarning}>{errors.avatarImage?.message}</p>
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
                {...register('email', {
                  required: 'Fill in the "Email address" field.',
                  pattern: {
                    value: /^[a-z][a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                    message: 'Invalid email address.',
                  },
                })}
                className={classes.textInput}
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
