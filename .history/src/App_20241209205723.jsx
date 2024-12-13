// import { useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import uuid4 from 'uuid4';

import classes from './App.module.scss';

import HeaderAuthorized from './components/HeaderAuthorized/HeaderAuthorized.jsx';
import HeaderUnauthorized from './components/HeaderUnauthorized/HeaderUnauthorized.jsx';
import PostsList from './components/PostsList/PostsList.jsx';
// import store from './redux/store.js';
// import sortTickets from './sortTicketsFunction.js';
// import * as actions from './redux/actions.js';

function App() {
  // useEffect();

  return (
    <main style={{ paddingBottom: '26px' }}>
      {/* <HeaderAuthorized /> */}
      <HeaderUnauthorized />
      <PostsList />
    </main>
  );
}

export default App;
