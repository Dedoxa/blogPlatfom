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
import { useGetArticlesQuery } from './AppAPI.js';
// import { useGetPostsQuery } from './AppAPI.js';
import store from './redux/store.js';
import * as actions from './redux/actions.js';

function App() {
  // const currentPage = useSelector((state) => state.currentPage);
  const articlesData = useSelector((state) => state.ArticlesData);
  console.log(articlesData);

  const { data: result, error: fetchingError, isLoading: loadingArticles } = useGetArticlesQuery;
  // const { data: result, error: fetchingError, isLoading: loadingArticles } = useGetPostsQuery(currentPage);

  // useEffect(() => {
  //   store.dispatch(actions.SET_ARTICLES_DATA(result?.articles));
  // }, [result, currentPage]);

  useEffect(() => {
    store.dispatch(actions.SET_ARTICLES_DATA(result?.articles));
    if (articlesData.length > 0) console.log(articlesData);
  }, [result]);

  return (
    <Router>
      <main className={classes.mainBox}>
        <Header />
        <div className={classes.contentBox}>
          {fetchingError && console.log(fetchingError) && <h1>Error in fetching data.</h1>}
          {loadingArticles && <Spin size="large" />}
          {!loadingArticles && (
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
