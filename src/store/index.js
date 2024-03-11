import { configureStore } from '@reduxjs/toolkit';
import { api } from '../services/api';
import authSlice from './authSlice';

export const store = configureStore({
  reducer: {
    authSlice: authSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
