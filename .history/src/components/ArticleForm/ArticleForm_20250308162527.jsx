// import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
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
    formState: { errors },
  } = useForm({ shouldUnregister: true });

  const navigate = useNavigate();

  // useEffect(() => {
  //   if (createArticleResult?.isSuccess === true && pathname === '/new-article') {
  //     createArticleResult.reset();
  //     navigate('/');
  //   }
  // }, [createArticleResult, pathname, navigate]);

  return (
    <div className={classes.contentBox}>
      {pathname === '/new-article' && <h2>Create new article</h2>}
      {pathname === '/articles/:slug/edit' && <h2>Edit article</h2>}
      <form
        onSubmit={handleSubmit((data) => {
          console.log('works: ', data);
          console.log(pathname);
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
          <p className={classes.inputWarning}>{errors.title?.message}</p>
        </label>
        <label htmlFor="description">
          <p>Short description</p>
          <input
            {...register('description', {
              required: 'Fill in the "Short description" field.',
            })}
            type="text"
            placeholder="Description"
            className={classes.textInput}
          />
          <p className={classes.inputWarning}>{errors.description?.message}</p>
        </label>
        <label htmlFor="text">
          <p>Text</p>
          <textarea
            {...register('text', {
              required: 'Fill in the "Text" field.',
              validate: {
                pattern: (value) => !/[!]/.test(value),
              },
            })}
            placeholder="Text"
            className={classes.textInput}
            style={{ height: '168px' }}
          />
          <p className={classes.inputWarning}>{errors.text?.message}</p>
        </label>
        <label htmlFor="tagList">
          <p>Tags</p>
          <div className={classes.tagArea}>
            <input
              {...register('tagList')}
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
