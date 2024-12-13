import classes from './ProfileWindow.module.scss';

const ProfileWindow = () => {
  return (
    <div className={classes.contentBox}>
      <h2>Create new account</h2>
      <form action="">
      <label htmlFor="username">
        <p>Username</p>
      </label>
      <label htmlFor="email">
        <p>Email address</p>
      </label>
      <label htmlFor="password">
        <p>Password</p>
      </label>
      <label htmlFor="passwordRepeat">
        <p>Repeat Password</p>
      </label>
      </form>
    </div>
  );
};

export default ProfileWindow;
