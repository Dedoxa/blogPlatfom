import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router';
import { useSelector } from 'react-redux';
import { Spin } from 'antd';
// import uuid4 from 'uuid4';

import ProfileWindow from './components/ProfileWindow/ProfileWindow.jsx';
import PostsList from './components/PostsList/PostsList.jsx';
import FullArticle from './components/FullArticle/FullArticle.jsx';
import ArticleForm from './components/ArticleForm/ArticleForm.jsx';
import classes from './App.module.scss';
import Header from './components/Header/Header.jsx';
import { useLazyGetArticlesQuery } from './AppAPI.js';
// import { useGetPostsQuery } from './AppAPI.js';
import store from './redux/store.js';
import * as actions from './redux/actions.js';

function App() {
  // const currentPage = useSelector((state) => state.currentPage);
  // const { data: result, error: fetchingError, isLoading: loadingArticles } = useGetPostsQuery(currentPage);

  // useEffect(() => {
  //   store.dispatch(actions.SET_ARTICLES_DATA(result?.articles));
  // }, [result, currentPage]);

  const articlesData = useSelector((state) => state.articlesData);

  const [triggerFetchData, result] = useLazyGetArticlesQuery();

  useEffect(() => {
    if (!result?.data?.articlesCount) {
      triggerFetchData(0);
    }
    if (articlesData.length < result?.data?.articlesCount) {
      console.log(`triggerFetchData(${articlesData.length})`);
      console.log('BEFORE:');
      console.log(result?.data?.articles);
      triggerFetchData(articlesData.length);
      console.log('AFTER:');
      console.log(result?.data?.articles);
      store.dispatch(actions.COLLECT_ARTICLES_DATA(result?.data?.articles));
    }
    if (articlesData.length >= result?.data?.articlesCount) {
      console.log('articlesData.length after last request = ', articlesData.length);
      console.log('DONE!');
      console.log(JSON.stringify(articlesData.at(-1)));
    }
  }, [result]);

  return (
    <Router>
      <main className={classes.mainBox}>
        <Header />
        <div className={classes.contentBox}>
          {/* {fetchingError && console.log(fetchingError) && <h1>Error in fetching data.</h1>} */}
          {articlesData.length < result?.data?.articlesCount && <Spin size="large" />}
          {articlesData.length >= result?.data?.articlesCount && (
            <Routes>
              <Route path="/" element={<Navigate to="/articles" replace />}></Route>
              <Route path="/articles" element={<PostsList />}></Route>
              <Route path="/articles/:slug" element={<FullArticle />}></Route>
              <Route path="/articleForm" element={<ArticleForm />}></Route>
              <Route path="/sign-in" element={<ProfileWindow />}></Route>
              <Route path="/sign-up" element={<ProfileWindow />}></Route>
              <Route path="/profile" element={<ProfileWindow />}></Route>
            </Routes>
          )}
        </div>
      </main>
    </Router>
  );
}

export default App;
