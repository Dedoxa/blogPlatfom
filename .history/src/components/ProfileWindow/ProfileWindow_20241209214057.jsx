import classes from './ProfileWindow.module.scss';

const ProfileWindow = () => {
  return (
    <div className={classes.contentBox}>
      <h2>Create new account</h2>
      <form action="#" method="get">
        <label htmlFor="username">
          <p>Username</p>
          <input className={classes.textInput} type="text" placeholder="Username" />
        </label>
        <label htmlFor="email">
          <p>Email address</p>
          <input className={classes.textInput} type="email" placeholder="Email address" />
        </label>
        <label htmlFor="password">
          <p>Password</p>
          <input className={classes.textInput} type="password" placeholder="Password" />
        </label>
        <label htmlFor="passwordRepeat">
          <p>Repeat Password</p>
          <input className={classes.textInput} type="password" placeholder="Password" />
        </label>
      </form>
    </div>
  );
};

export default ProfileWindow;
