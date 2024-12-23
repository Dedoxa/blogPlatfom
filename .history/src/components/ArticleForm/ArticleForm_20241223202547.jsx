import store from '../../redux/store';

import classes from './ArticleForm.module.scss';

const ArticleForm = () => {
  const ARTICLE_FORM_TYPE = 0;

  return (
    <div className={classes.contentBox}>
      {ARTICLE_FORM_TYPE === 0 && (
        <>
          <h2>Create new article</h2>
          <form action="#" method="get">
            <label htmlFor="title">
              <p>Title</p>
              <input id="title" className={classes.textInput} type="text" placeholder="Title" required />
            </label>
            <label htmlFor="description">
              <p>Short description</p>
              <input id="description" className={classes.textInput} type="text" placeholder="Description" required />
            </label>
            <label htmlFor="text">
              <p>Text</p>
              <input
                id="text"
                className={classes.textInput}
                style={{ height: '168px', textAlign: 'center' }}
                type="text"
                placeholder="Text"
                required
              />
            </label>
            <label htmlFor="tags">
              <p>Tags</p>
              <input id="tags" className={classes.textInput} type="text" placeholder="Tag" />
            </label>
            <input className={classes.submitButton} type="submit" value={'Send'} />
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
