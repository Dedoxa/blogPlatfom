import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router';
import { useSelector } from 'react-redux';
import { Spin } from 'antd';

import ProfileWindow from './components/ProfileWindow/ProfileWindow.jsx';
import PostsList from './components/PostsList/PostsList.jsx';
import FullArticle from './components/FullArticle/FullArticle.jsx';
import ArticleForm from './components/ArticleForm/ArticleForm.jsx';
import classes from './App.module.scss';
import Header from './components/Header/Header.jsx';
import { useGetPostsQuery } from './AppAPI.js';
import store from './redux/store.js';
import { setArticlesData, setAmountOfArticles } from './redux/toolkitSlice.js';

function App() {
  const currentPage = useSelector((state) => state.toolkit.currentPage);

  let userToken = useSelector((state) => state.toolkit.logInUserData?.token);
  if (!userToken) userToken = window.localStorage.getItem('token');

  const {
    data: result,
    error: fetchingError,
    isLoading: loadingArticles,
  } = useGetPostsQuery(currentPage, { refetchOnMountOrArgChange: true });

  useEffect(() => {
    store.dispatch(setArticlesData(result?.articles));
    store.dispatch(setAmountOfArticles(result?.articlesCount));
  }, [result, currentPage]);

  return (
    <Router>
      <main className={classes.mainBox}>
        <Header />
        <div className={classes.contentBox}>
          {fetchingError && console.log(fetchingError)}
          {loadingArticles && <Spin size="large" />}
          {!loadingArticles && (
            <Routes>
              <Route path="/" element={<Navigate to="/articles" replace />}></Route>
              <Route path="/articles" element={<PostsList />}></Route>
              <Route path="/articles/:slug" element={<FullArticle />}></Route>
              <Route path="/new-article" element={<ArticleForm />}></Route>
              <Route path="/articles/:slug/edit" element={<ArticleForm />}></Route>
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
