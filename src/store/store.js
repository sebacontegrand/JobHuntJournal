import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/AuthSlice';
import { journalSlice } from './journal/JournalSlice';


export const store = configureStore({
  reducer: {

    auth:authSlice.reducer,
    journal:journalSlice.reducer,

  },
});