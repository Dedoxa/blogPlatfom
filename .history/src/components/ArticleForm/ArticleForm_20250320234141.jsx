import { useEffect } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

import { useCreateNewArticleMutation, useUpdateArticleMutation, useGetParticularArticleQuery } from '../../AppAPI';
import store from '../../redux/store.js';
import * as actions from '../../redux/actions.js';

import classes from './ArticleForm.module.scss';

const ArticleForm = () => {
  let userName = useSelector((state) => state.logInUserData?.username);
  if (!userName) userName = window.localStorage.getItem('username');
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
  const location = useLocation();
  const articlePathName = location.state;
  const { data: result } = useGetParticularArticleQuery(articlePathName);
  const article = result?.article;

  const navigate = useNavigate();

  const titleClasses = [classes.textInput];
  const descriptionClasses = [classes.textInput];
  const bodyClasses = [classes.textInput];

  useEffect(() => {
    if (createArticleResult?.isSuccess && pathname === '/new-article') {
      navigate(`/articles/${createArticleResult?.data?.article?.slug}`);
    }
    if (updateArticleResult?.isSuccess && pathname === `/articles/${slug}/edit`) {
      navigate(`/articles/${slug}`);
    }
    if (userName !== article?.author?.username && pathname === `/articles/${slug}/edit`) {
      console.log(userName, article);
      navigate(`/articles/${slug}`);
    }
    if (pathname === '/new-article') {
      store.dispatch(actions.CLEAR_TAG_INPUT);
      reset();
    }
    if (article?.tagList) {
      store.dispatch(actions.CLEAR_TAG_INPUT);
      for (let i = 0; i < article?.tagList.length; i++) {
        store.dispatch(actions.ADD_TAG_INPUT(article?.tagList[i]));
      }
    }
  }, [
    createArticleResult,
    updateArticleResult,
    slug,
    pathname,
    reset,
    article,
    article?.tagList,
    article?.author?.username,
    userName,
    navigate,
  ]);

  return (
    <div className={classes.contentBox}>
      {!createArticleResult.isSuccess && pathname === '/new-article' && <h2>Create new article</h2>}
      {!updateArticleResult?.isSuccess && pathname === `/articles/${slug}/edit` && <h2>Edit article</h2>}
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
            className={titleClasses.join(' ')}
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
            className={descriptionClasses.join(' ')}
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
            className={bodyClasses.join(' ')}
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
          <div style={{ marginTop: '20px' }}>
            <span
              className={classes.fullArticleBlueButton}
              onClick={() => {
                store.dispatch(actions.ADD_TAG_INPUT());
              }}
            >
              Add tag
            </span>
          </div>
        </label>
        <input className={classes.submitButton} type="submit" value={'Send'} />
      </form>
    </div>
  );
};

export default ArticleForm;
