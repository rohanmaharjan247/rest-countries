import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Country } from '../models/Country';

export const countryApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://restcountries.com/v3.1/' }),
  tagTypes: ['Country'],
  endpoints: (builder) => ({}),
});
