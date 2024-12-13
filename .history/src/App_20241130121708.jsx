import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import uuid4 from 'uuid4';

import classes from './App.module.scss';
// import { useGetIDQuery, useLazyGetTicketsQuery } from './AppAPI.js';
import store from './redux/store.js';
import sortTickets from './sortTicketsFunction.js';
import * as actions from './redux/actions.js';

function App() {
  // const { data: idData, error: IDError, isLoading: isLoadingID } = useGetIDQuery();
  // const [triggerFetchData, result] = useLazyGetTicketsQuery();

  const currentId = useSelector((state) => state.requestId);

  useEffect(() => {
    if (idData?.searchId && !currentId) {
      store.dispatch({ type: 'SET_ID', newId: idData.searchId });
    }
    if (currentId && result?.data?.stop === undefined) {
      store.dispatch(actions.START_FETCHING);
      triggerFetchData(currentId);
    }
    if (result?.data?.stop === false) {
      triggerFetchData(currentId);
      store.dispatch({ type: 'UPDATE_TICKETS', ticketsArray: result.data.tickets });
    }
    if (result?.data?.stop === true) {
      store.dispatch(actions.STOP_FETCHING);
    }
  }, [idData, result, currentId, triggerFetchData]);

  const currentTickets = useSelector((state) => state.tickets);
  const currentTransferFilters = useSelector((state) => state.transferFilters);
  const currentPriceFilter = useSelector((state) => state.priceFilter);
  const currentRenderedTickets = useSelector((state) => state.renderedTickets);
  const isFetching = useSelector((state) => state.isFetching);

  const sortedTickets = sortTickets(currentTickets, currentTransferFilters, currentPriceFilter, currentRenderedTickets);
}

export default App;
