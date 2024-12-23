import classes from './ArticleForm.module.scss';

const ArticleForm = () => {
  const ARTICLE_FORM_TYPE = 0;

  return (
    <div className={classes.contentBox}>
      {ARTICLE_FORM_TYPE === 0 && (
        <>
          <h2>Create new article</h2>
        </>
      )}
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
              <textarea
                id="text"
                className={classes.textInput}
                style={{ height: '168px' }}
                placeholder="Text"
                required
              />
            </label>
            <label htmlFor="tags">
              <p>Tags</p>
              <div className={classes.tagArea}>
                <input id="tags" className={`${classes.textInput} ${classes.tagInput}`} type="text" placeholder="Tag" />
                <span className={classes.fullArticleRedButton}>Delete</span>
                <span className={classes.fullArticleBlueButton}>Add tag</span>
              </div>
            </label>
            <input className={classes.submitButton} type="submit" value={'Send'} />
          </form>
    </div>
  );
};

export default ArticleForm;
