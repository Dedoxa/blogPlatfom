import classes from './ProfileWindow.module.scss';

const ProfileWindow = () => {
  return (
    <div className={classes.contentBox}>
      <h2>Create new account</h2>
      <label htmlFor="username">
        <p>Username</p>
      </label>
      <label htmlFor="email">
        <p>Email adress</p>
      </label>
      <label htmlFor="password">
        <p></p>
      </label>
      <label htmlFor="passwordRepeat">
        <p></p>
      </label>
    </div>
  );
};

export default ProfileWindow;
