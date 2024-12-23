import store from '../../redux/store';

import classes from './ArticleForm.module.scss';

const ArticleForm = () => {
  const ARTICLE_FORM_TYPE = 0;

  return (
    <div className={classes.contentBox}>
      {ARTICLE_FORM_TYPE === 0 && (
        <>
          <h2>Create new accountTTTT</h2>
          <form action="#" method="get">
            <label htmlFor="username">
              <p>Title</p>
              <input id="username" className={classes.textInput} type="text" placeholder="Username" required />
            </label>
            <label htmlFor="email">
              <p>Short description</p>
              <input id="email" className={classes.textInput} type="email" placeholder="Email address" required />
            </label>
            <label htmlFor="password">
              <p>Text</p>
              <input
                id="password"
                className={classes.textInput}
                type="password"
                placeholder="Password"
                onChange={(value) => store.dispatch({ type: 'CHANGE_PASSWORD_IN_INPUT', value: value.target.value })}
                required
              />
            </label>
            <label htmlFor="passwordRepeat">
              <p>Tags</p>
              <input
                id="passwordRepeat"
                className={classes.textInput}
                type="password"
                placeholder="Password"
                onChange={(value) =>
                  store.dispatch({ type: 'CHANGE_PASSWORD_REPETITION_IN_INPUT', value: value.target.value })
                }
                required
              />
            </label>
            <input className={classes.submitButton} type="submit" value={'Create'} />
          </form>
        </>
      )}
      {ARTICLE_FORM_TYPE === 1 && (
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
    </div>
  );
};

export default ArticleForm;
