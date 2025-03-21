import { useEffect } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

import { useCreateNewArticleMutation, useUpdateArticleMutation, useGetParticularArticleQuery } from '../../AppAPI';
import store from '../../redux/store.js';
import { addTagInput, deleteTagInput, clearTagInput } from '../../redux/toolkitSlice.js';

import classes from './ArticleForm.module.scss';

const ArticleForm = () => {
  let userName = useSelector((state) => state.toolkit.logInUserData?.username);
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
  const isCreating = createArticleResult.isLoading;

  const [updateArticle, updateArticleResult] = useUpdateArticleMutation();
  const isUpdatingArticle = updateArticleResult.isLoading;

  const tagInputs = useSelector((state) => state.toolkit.tagInputs);
  const location = useLocation();
  const articlePathName = location.state;
  const { data: result } = useGetParticularArticleQuery(articlePathName);
  const article = result?.article;

  const navigate = useNavigate();

  const titleClasses = [classes.textInput];
  if (!titleClasses.includes(classes.textRedInput) && errors.title?.message) {
    titleClasses.push(classes.textRedInput);
  }
  if (titleClasses.includes(classes.textRedInput) && !errors.title?.message) {
    titleClasses.pop();
  }

  const descriptionClasses = [classes.textInput];
  if (!descriptionClasses.includes(classes.textRedInput) && errors.description?.message) {
    descriptionClasses.push(classes.textRedInput);
  }
  if (descriptionClasses.includes(classes.textRedInput) && !errors.description?.message) {
    descriptionClasses.pop();
  }

  const bodyClasses = [classes.textInput];
  if (!bodyClasses.includes(classes.textRedInput) && errors.body?.message) {
    bodyClasses.push(classes.textRedInput);
  }
  if (bodyClasses.includes(classes.textRedInput) && !errors.body?.message) {
    bodyClasses.pop();
  }

  useEffect(() => {
    if (createArticleResult?.isSuccess && pathname === '/new-article') {
      navigate(`/articles/${createArticleResult?.data?.article?.slug}`);
    }
    if (updateArticleResult?.isSuccess && pathname === `/articles/${slug}/edit`) {
      navigate(`/articles/${slug}`);
    }
    if (userName !== article?.author?.username && pathname === `/articles/${slug}/edit`) {
      navigate(`/articles/${slug}`);
    }
    if (pathname === '/new-article') {
      store.dispatch(clearTagInput());
      reset();
    }
    if (article?.tagList) {
      store.dispatch(clearTagInput());
      for (let i = 0; i < article?.tagList.length; i++) {
        store.dispatch(addTagInput(article?.tagList[i]));
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

  const isDisabled = isCreating || isUpdatingArticle ? true : false;
  const submitButtonClasses = [classes.submitButton];
  if (!submitButtonClasses.includes(classes.submitDisabledButton) && (isCreating || isUpdatingArticle)) {
    submitButtonClasses.push(classes.submitDisabledButton);
  }
  if (submitButtonClasses.includes(classes.submitDisabledButton) && !isCreating && !isUpdatingArticle) {
    submitButtonClasses.pop();
  }

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
                  store.dispatch(deleteTagInput([array, input]));
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
                store.dispatch(addTagInput());
              }}
            >
              Add tag
            </span>
          </div>
        </label>
        <input className={submitButtonClasses.join(' ')} type="submit" value={'Send'} disabled={isDisabled} />
      </form>
    </div>
  );
};

export default ArticleForm;
