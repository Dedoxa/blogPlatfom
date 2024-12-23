import changeParticularTransferFilter from './supportFunctions';

export const checkPriceFilter = (state = 'CHEAPEST', action) => {
  switch (action.type) {
    case 'CHEAPEST':
      return 'CHEAPEST';
    case 'FASTEST':
      return 'FASTEST';
    case 'OPTIMAL':
      return 'OPTIMAL';
    default:
      return state;
  }
};

export const showMoreTickets = (state = 5, action) => {
  switch (action.type) {
    case 'SHOW_MORE_TICKETS':
      return state + 5;
    default:
      return state;
  }
};

export const checkFetching = (state = false, action) => {
  switch (action.type) {
    case 'START_FETCHING':
      return true;
    case 'STOP_FETCHING':
      return false;
    default:
      return state;
  }
};

export const changeRequestId = (state = null, action) => {
  switch (action.type) {
    case 'SET_ID':
      return action.newId;
    default:
      return state;
  }
};

export const updateTickets = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_TICKETS':
      return state.length === 0 ? action.ticketsArray : [...state, ...action.ticketsArray];
    default:
      return state;
  }
};
