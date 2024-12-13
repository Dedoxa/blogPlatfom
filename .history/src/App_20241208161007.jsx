// import { useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import uuid4 from 'uuid4';

import classes from './App.module.scss';
import Header from './components/Header/Header.jsx';
import Posts from './components/Posts/Posts.jsx';
// import store from './redux/store.js';
// import sortTickets from './sortTicketsFunction.js';
// import * as actions from './redux/actions.js';

function App() {
  // useEffect();

  return (
    <>
      <Header />
      <Posts />
    </>
  );
}

export default App;
