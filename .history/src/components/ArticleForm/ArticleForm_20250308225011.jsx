import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

import { useCreateNewArticleMutation } from '../../AppAPI';
// import { stringifyWithFirstCapitalLetter } from '../../redux/supportFunctions.js';
import store from '../../redux/store.js';
import * as actions from '../../redux/actions.js';

import classes from './ArticleForm.module.scss';

const ArticleForm = () => {
  const { pathname } = useLocation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    shouldUnregister: true,
    defaultValues: {
      title: '',
      description: '',
      body: '',
    }
  });

  const [createNewArticle, createArticleResult] = useCreateNewArticleMutation();

  // const navigate = useNavigate();

  useEffect(() => {
    if (createArticleResult?.isSuccess === true && pathname === '/new-article') {
      setTimeout(() => {
        createArticleResult.reset();
      }, 3500);
      reset();
    }
  }, [createArticleResult, pathname, reset]);

  const tagInputs = useSelector((state) => state.tagInputs);

  return (
    <div className={classes.contentBox}>
      {!createArticleResult.isSuccess && pathname === '/new-article' && <h2>Create new article</h2>}
      {createArticleResult?.isSuccess && pathname === '/new-article' && (
        <h2 className={classes.successColor}>Article is successfully created!</h2>
      )}
      {pathname === '/articles/:slug/edit' && <h2>Edit article</h2>}
      {/* {!updateArticleResult?.isSuccess && pathname === '/articles/:slug/edit' && <h2>Edit article</h2>}
      {updateArticleResult?.isSuccess && pathname === '/articles/:slug/edit' && (
        <h2 className={classes.successColor}>Article is successfully updated!</h2>
      )} */}
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
          createNewArticle(dataObject);
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
        <label htmlFor="body">
          <p>Text</p>
          <textarea
            {...register('body', {
              required: 'Fill in the "Text" field.',
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
                {...register(`tag${input}`)}
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
          <span
            className={classes.fullArticleBlueButton}
            onClick={() => {
              store.dispatch(actions.ADD_TAG_INPUT);
            }}
          >
            Add tag
          </span>
        </label>
        <input className={classes.submitButton} type="submit" value={'Send'} />
      </form>
    </div>
  );
};

export default ArticleForm;
