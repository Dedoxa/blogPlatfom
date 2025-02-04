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
import { useGetPostsQuery, useLazyGetParticularArticleQuery } from './AppAPI.js';
import store from './redux/store.js';
import * as actions from './redux/actions.js';

function App() {
  const currentPage = useSelector((state) => state.currentPage);

  const { data: result, error: fetchingError, isLoading: loadingArticles } = useGetPostsQuery(currentPage);
  const [triggerFetchData, newFullArticle] = useLazyGetParticularArticleQuery();

  useEffect(() => {
    store.dispatch(actions.SET_ARTICLES_DATA(result?.articles));
    console.log('result: ', result);
  }, [result, currentPage]);

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
              <Route path="/articles:slug" 
                render
              ></Route>
              <Route path="/articleForm" element={<ArticleForm />}></Route>
              <Route path="/authorisation" element={<ProfileWindow />}></Route>
            </Routes>
          )}
        </div>
      </main>
    </Router>
  );
}

export default App;
