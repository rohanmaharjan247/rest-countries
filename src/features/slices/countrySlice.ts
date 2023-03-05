import { RootState } from './../../app/store';
import { countryApi } from './../api/apiSlice';
import {
  createEntityAdapter,
  createSelector,
  EntityId,
} from '@reduxjs/toolkit';
import type { EntityState } from '@reduxjs/toolkit';
import { Country } from '../models/Country';

const countryAdapter = createEntityAdapter<Country>({
  selectId: (country) => country.name.common,
});

const initialState = countryAdapter.getInitialState();

export const extendedApiSlice = countryApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCountry: builder.query<EntityState<Country>, void>({
      query: () => `all`,
      transformResponse: (response: Country[]) => {
        console.log(response);
        return countryAdapter.setAll(initialState, response);
      },
    }),
    getCountry: builder.query<Country[], string>({
      query: (name: string) => `name/${name}`,
    }),
    getCountryByRegion: builder.query<EntityState<Country>, string>({
      query: (region: string) => `region/${region}`,
      transformResponse: (response: Country[]) => {
        return countryAdapter.setAll(initialState, response);
      },
    }),
  }),
});

const selectCountries = extendedApiSlice.endpoints.getAllCountry.select();

export const selectCountryByRegion = (region: string) => {
  const countryRegionApi =
    extendedApiSlice.endpoints.getCountryByRegion.select(region);
  const countryAdapterSelectors = createSelector(
    countryRegionApi,
    (countryByRegionResult: any) =>
      countryAdapter.getSelectors(
        () => countryByRegionResult.data ?? initialState
      )
  );

  const countryRegion = {
    selectAll: createSelector(countryAdapterSelectors, (s) =>
      s.selectAll(undefined)
    ),
    selectEntities: createSelector(countryAdapterSelectors, (s) =>
      s.selectEntities(undefined)
    ),
    selectIds: createSelector(countryAdapterSelectors, (s) =>
      s.selectIds(undefined)
    ),
    selectTotal: createSelector(countryAdapterSelectors, (s) =>
      s.selectTotal(undefined)
    ),
    selectById: (id: EntityId) =>
      createSelector(countryAdapterSelectors, (s) => s.selectById(s, id)),
  };
  return countryRegion;
};

// export const getCountry = (state: RootState, name: string) =>
//   selectCountries(state).data?.find((x) => x.name.common === name);

export const {
  useGetAllCountryQuery,
  useGetCountryByRegionQuery,
  useGetCountryQuery,
} = extendedApiSlice;

// Learn more about selectors
const getCountries = createSelector(
  selectCountries,
  (countryResult: any) => countryResult.data
);

export const { selectAll: selectAllCountries, selectById: selectCountryById } =
  countryAdapter.getSelectors(
    (state: RootState) => getCountries(state) ?? initialState
  );

//export const { getCountryByRegion } = countrySlice.actions;
