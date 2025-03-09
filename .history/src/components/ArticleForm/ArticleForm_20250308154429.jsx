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
            {...register('title', {
              required: 'Fill in the "Title" field.',
            })}
            type="text"
            placeholder="Title"
            className={classes.textInput}
          />
        </label>
        <label htmlFor="description">
          <p>Short description</p>
          <input
            {...register('description', {
              required: 'Fill in the "Description" field.',
            })}
            type="text"
            placeholder="Description"
            className={classes.textInput}
          />
        </label>
        <label htmlFor="text">
          <p>Text</p>
          <input
            {...register('text', {
              required: 'Fill in the "Text" field.',
            })}
            type="text"
            placeholder="Text"
            className={classes.textInput}
            style={{ height: '168px' }}
          />
          <textarea id="text" className={classes.textInput} style={{ height: '50px' }} placeholder="Text" required />
        </label>
        <label htmlFor="tagList">
          <p>Tags</p>
          <div className={classes.tagArea}>
            <input
              {...register('tagList', {
                validate: {
                  pattern: (value) => !/[!]/.test(value),
                },
              })}
              type="text"
              placeholder="Tag"
              className={`${classes.textInput} ${classes.tagInput}`}
            />
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
