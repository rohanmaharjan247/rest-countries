import { configureStore } from '@reduxjs/toolkit';
import { countryApi } from '../features/api/apiSlice';
import countryReducer from '../features/slices/countrySlice';

export const store = configureStore({
  reducer: {
    countries: countryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
