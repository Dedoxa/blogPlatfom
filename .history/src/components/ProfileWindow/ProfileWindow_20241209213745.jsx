import classes from './ProfileWindow.module.scss';

const ProfileWindow = () => {
  return (
    <div className={classes.contentBox}>
      <h2>Create new account</h2>
      <form action="">
        <label htmlFor="username">
          <p>Username</p>
          <input type="text" placeholder="Username" />
        </label>
        <label htmlFor="email">
          <p>Email address</p>
          <input type="text" placeholder="Email address" />
        </label>
        <label htmlFor="password">
          <p>Password</p>
          <input type="password" placeholder="Password" />
        </label>
        <label htmlFor="passwordRepeat">
          <p>Repeat Password</p>
        </label>
      </form>
    </div>
  );
};

export default ProfileWindow;
