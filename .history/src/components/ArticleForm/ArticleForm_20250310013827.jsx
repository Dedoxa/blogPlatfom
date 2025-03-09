import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

import { useGetParticularArticleQuery, useCreateNewArticleMutation, useUpdateArticleMutation } from '../../AppAPI';
import store from '../../redux/store.js';
import * as actions from '../../redux/actions.js';

import classes from './ArticleForm.module.scss';

const ArticleForm = () => {
  const { pathname } = useLocation();
  const { slug } = useParams();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ shouldUnregister: true });

  const [createNewArticle, createArticleResult] = useCreateNewArticleMutation();
  const [updateArticle, updateArticleResult] = useUpdateArticleMutation();

  const tagInputs = useSelector((state) => state.tagInputs);
  const { data: fullArticle } = useGetParticularArticleQuery(slug);
  const article = fullArticle?.article;

  useEffect(() => {
    if (createArticleResult?.isSuccess && pathname === '/new-article') {
      setTimeout(() => {
        createArticleResult.reset();
      }, 3500);
      reset();
    }
    if (updateArticleResult?.isSuccess && pathname === `/articles/${slug}/edit`) {
      setTimeout(() => {
        updateArticleResult.reset();
      }, 3500);
      reset();
    }
    if (article?.tagList) {
      store.dispatch(actions.CLEAR_TAG_INPUT);
      for (let i = 0; i < article?.tagList.length; i++) {
        store.dispatch(actions.ADD_TAG_INPUT(article?.tagList[i]));
      }
    }
  }, [createArticleResult, updateArticleResult, slug, pathname, reset, article?.tagList]);

  return (
    <div className={classes.contentBox}>
      {!createArticleResult.isSuccess && pathname === '/new-article' && <h2>Create new article</h2>}
      {createArticleResult?.isSuccess && pathname === '/new-article' && (
        <h2 className={classes.successColor}>Article is successfully created!</h2>
      )}
      {!updateArticleResult?.isSuccess && pathname === `/articles/${slug}/edit` && <h2>Edit article</h2>}
      {updateArticleResult?.isSuccess && pathname === `/articles/${slug}/edit` && (
        <h2 className={classes.successColor}>Article is successfully updated!</h2>
      )}
      <form
        onSubmit={handleSubmit((data) => {
          const tagList = Object.entries(data)
            .filter((array) => array[0].includes('tag'))
            .map((element) => (element = element[1]));
          const dataCopy = JSON.parse(JSON.stringify(data));
          const tagPropertiesArray = Object.keys(dataCopy).filter((element) => element.includes('tag'));
          for (let i = tagPropertiesArray.length - 1; i >= 0; i--) {
            delete dataCopy[tagPropertiesArray[i]];
          }
          const newData = { ...dataCopy, tagList: tagList };
          const dataObject = { token: window.localStorage.getItem('token'), article: newData };
          if (pathname === '/new-article') createNewArticle(dataObject);
          if (pathname === `/articles/${slug}/edit`) {
            updateArticle({ ...dataObject, path: `/articles/${slug}` });
          }
          console.log(createArticleResult);
        })}
        action="#"
        method="post"
      >
        <label htmlFor="title">
          <p>Title</p>
          <input
            {...register('title', {
              required: 'Fill in the "Title" field.',
              value: article?.title,
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
              value: article?.description,
            })}
            type="text"
            placeholder="Description"
            className={classes.textInput}
          />
          <p className={classes.inputWarning}>{errors.description?.message}</p>
        </label>
        <label htmlFor="body">
          <p>Text</p>
          <textarea
            {...register('body', {
              required: 'Fill in the "Text" field.',
              value: article?.body,
              validate: {
                pattern: (value) => !/[!]/.test(value),
              },
            })}
            placeholder="Text"
            className={classes.textInput}
            style={{ height: '168px' }}
          />
          <p className={classes.inputWarning}>{errors.body?.message}</p>
        </label>
        <label htmlFor="tagList">
          <p>Tags</p>
          {tagInputs?.map((input, index, array) => (
            <div className={classes.tagArea} key={index}>
              <input
                {...register(`tag${input[0]}`, {
                  value: input[1],
                })}
                type="text"
                placeholder={'Tag'}
                className={`${classes.textInput} ${classes.tagInput}`}
              />
              <span
                className={classes.fullArticleRedButton}
                onClick={() => {
                  store.dispatch(actions.DELETE_TAG_INPUT(input, array));
                }}
              >
                Delete
              </span>
            </div>
          ))}
          <div
            className={classes.fullArticleBlueButton}
            onClick={() => {
              store.dispatch(actions.ADD_TAG_INPUT());
            }}
          >
            Add tag
          </div>
        </label>
        <input className={classes.submitButton} type="submit" value={'Send'} />
      </form>
    </div>
  );
};

export default ArticleForm;
