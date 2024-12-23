import { configureStore } from '@reduxjs/toolkit';

// import { aviaTickets } from '../AppAPI';

import { changePasswordInInput } from './reducers';

const store = configureStore({
  reducer: {
    PasswordInInput: changePasswordInInput,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(aviaTickets.middleware),
});

export default store;
