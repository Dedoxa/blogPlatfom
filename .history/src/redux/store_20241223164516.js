import { configureStore } from '@reduxjs/toolkit';

// import { aviaTickets } from '../AppAPI';

import { changePasswordInInput, changePasswordRepetitionInInput } from './reducers';

const store = configureStore({
  reducer: {
    PasswordInInput: changePasswordInInput,
    PasswordRepetitionInInput: changePasswordRepetitionInInput,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(aviaTickets.middleware),
});

export default store;
