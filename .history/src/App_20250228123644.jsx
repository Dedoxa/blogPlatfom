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
  const articlesData = useSelector((state) => state.ArticlesData);

  const [triggerFetchData, result] = useLazyGetArticlesQuery();
  // const { data: result, error: fetchingError, isLoading: loadingArticles } = useGetPostsQuery(currentPage);

  // useEffect(() => {
  //   store.dispatch(actions.SET_ARTICLES_DATA(result?.articles));
  // }, [result, currentPage]);

  useEffect(() => {
    if (articlesData.length <= 0) {
      triggerFetchData(0);
      console.log('result', result);
      console.log('result.articlesCount', result.articlesCount);
      store.dispatch(actions.COLLECT_ARTICLES_DATA(result?.articles));
      console.log('articlesData.length after first request', articlesData.length);
    }
    if (articlesData.length > 0) {
      console.log(`it's more than zero! Length = ${articlesData.length}`);
    }
    // if (articlesData.length < result.articlesCount) {
    //   triggerFetchData(articlesData.length);
    //   store.dispatch(actions.COLLECT_ARTICLES_DATA(result?.articles));
    //   console.log('articlesData.length after next request', articlesData.length);
    // }
    // }, [result, articlesData.length, triggerFetchData]);
  }, []);

  return (
    <Router>
      <main className={classes.mainBox}>
        <Header />
        <div className={classes.contentBox}>
          {/* {fetchingError && console.log(fetchingError) && <h1>Error in fetching data.</h1>} */}
          {articlesData.length < result.articlesCount && <Spin size="large" />}
          {articlesData.length === result.articlesCount && (
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
