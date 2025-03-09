// import { useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';

// import {  } from '../../AppAPI';
// import { stringifyWithFirstCapitalLetter } from '../../redux/supportFunctions.js';
// import store from '../../redux/store';
// import * as actions from '../../redux/actions.js';

import classes from './ArticleForm.module.scss';

const ArticleForm = () => {
  const { pathname } = useLocation();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({ shouldUnregister: true });

  const navigate = useNavigate();

  const ARTICLE_FORM_TYPE = 0;

  return (
    <div className={classes.contentBox}>
      {ARTICLE_FORM_TYPE === 0 && <h2>Create new article</h2>}
      {ARTICLE_FORM_TYPE === 1 && <h2>Edit article</h2>}
      <form
        onSubmit={handleSubmit((data) => {
          console.log('works: ', data);
        })}
        action="#"
        method="post"
      >
        <label htmlFor="title">
          <p>Title</p>
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
          <input id="title" className={classes.textInput} type="text" placeholder="Title" required />
        </label>
        <label htmlFor="description">
          <p>Short description</p>
          <input id="description" className={classes.textInput} type="text" placeholder="Description" required />
        </label>
        <label htmlFor="text">
          <p>Text</p>
          <textarea id="text" className={classes.textInput} style={{ height: '168px' }} placeholder="Text" required />
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
