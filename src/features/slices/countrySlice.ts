import { RootState } from './../../app/store';
import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit';
import { Country } from '../models/Country';
import axios from 'axios';
import { LoadingState } from '../models/LoadingState';

const axiosInstance = axios.create({
  baseURL: 'https://restcountries.com/v3.1/',
});

interface FetchError {
  message: string;
}

export type FilterType = {
  region: string | undefined;
  countryName: string | undefined;
};

const sortAlphabetically = (first: Country, second: Country) => {
  return first.name.common.localeCompare(second.name.common);
};

const countryAdapter = createEntityAdapter<Country>({
  selectId: (country) => country.name.common,
  sortComparer: sortAlphabetically,
});

const initialState = countryAdapter.getInitialState({
  status: LoadingState.IDLE,
});

export const fetchGetAllCountry = createAsyncThunk<
  Country[],
  void,
  { rejectValue: FetchError }
>('country/getallcountry', async (_, thunkApi) => {
  try {
    const response = await axiosInstance.get('all');
    return response.data as Country[];
  } catch (error) {
    return thunkApi.rejectWithValue({
      message: 'Error while fetching all countries',
    });
  }
});

const countrySlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchGetAllCountry.pending, (state) => {
        state.status = LoadingState.PENDING;
      })
      .addCase(fetchGetAllCountry.fulfilled, (state, action) => {
        state.status = LoadingState.SUCCESS;
        countryAdapter.upsertMany(state, action.payload);
      });
  },
});

export const getAllCountries = (state: RootState) => state.countries;

export const getCountryByName = (state: RootState, countryName: string) =>
  state.countries.entities[countryName];

export const getStatus = (state: RootState) =>
  state.countries.status as LoadingState;

export const {
  selectAll: selectAllCountries,
  selectById: selectCountriesById,
} = countryAdapter.getSelectors(getAllCountries);
export const selectCountriesByRegionOrName = createSelector(
  [selectAllCountries, (state: RootState, filter: FilterType) => filter],
  (countries, filter: FilterType) =>
    countries.filter((x) => filterByNameOrRegion(x, filter))
);

function filterByNameOrRegion(country: Country, filter: FilterType) {
  if (filter.region && filter.countryName)
    return (
      country.region.toLowerCase() === filter.region &&
      country.name.common
        .toLowerCase()
        .includes(filter.countryName?.toLowerCase())
    );
  if (filter.region) return country.region.toLowerCase() === filter.region;
  if (filter.countryName)
    return country.name.common
      .toLowerCase()
      .includes(filter.countryName.toLowerCase());
}

export default countrySlice.reducer;
