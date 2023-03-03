import { RootState } from './../../app/store';
import { countryApi } from './../api/apiSlice';
import {
  createSlice,
  createEntityAdapter,
  createSelector,
  EntityState,
} from '@reduxjs/toolkit';
import { Country } from '../models/Country';

const countryAdapter = createEntityAdapter<Country>({
  selectId: (country) => country.name.common,
});

const initialState = countryAdapter.getInitialState();

export const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {},
});

export const selectCountries = countryApi.endpoints.getAllCountry.select();

export const getCountry = (state: RootState, name: string) =>
  selectCountries(state).data?.find((x) => x.name.common === name);

// Learn more about selectors
// const getCountries = createSelector(
//   selectCountries,
//   (countryResult: any) => countryResult.data
// );

// export const { selectAll, selectById } = countryAdapter.getSelectors(
//   (state: RootState) => getCountries(state) ?? initialState
// );

export default countrySlice.reducer;
