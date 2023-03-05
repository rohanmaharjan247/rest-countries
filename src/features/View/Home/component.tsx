import CountryCard from '../CountryCard/component';
import Header from '../../../components/Header/component';
import { ChangeEvent, useState } from 'react';
import {
  selectCountryByRegion,
  selectAllCountries,
  useGetAllCountryQuery,
  useGetCountryByRegionQuery,
  useGetCountryQuery,
} from '../../slices/countrySlice';
import { SerializedError } from '@reduxjs/toolkit';
import { useAppSelector } from '../../../app/hook';
import { Country } from '../../models/Country';
import useDebounce from '../../../components/shared/hook';

const Home = () => {
  const [region, setRegion] = useState('');
  const [countryName, setCountryName] = useState('');
  const debouncedCountryName = useDebounce<string>(countryName, 500);
  const { isLoading, isError, error } = useGetAllCountryQuery();
  const {
    isLoading: isLoadingByRegion,
    isError: isErrorByRegion,
    error: errorByRegion,
  } = useGetCountryByRegionQuery(region, {
    skip: !region || region === 'FO' || region === '',
  });
  const { data: countriesByName, isLoading: isLoadingByName } =
    useGetCountryQuery(countryName, {
      skip: !countryName || countryName === '',
    });

  const allCountries = useAppSelector(selectAllCountries);
  const { selectAll: selectAllCountryByRegion } = selectCountryByRegion(region);
  const countryByRegionList = useAppSelector(selectAllCountryByRegion);

  let loadedCountries: Country[];

  if (countriesByName && countriesByName.length > 0) {
    loadedCountries = countriesByName;
  } else if (countryByRegionList?.length > 0) {
    loadedCountries = countryByRegionList;
  } else {
    loadedCountries = allCountries;
  }

  const err = (error as SerializedError) || (errorByRegion as SerializedError);

  // console.log('data', countries);

  const onDropdownChanged = (e: ChangeEvent<HTMLSelectElement>) => {
    //console.log(e.target.value);
    setRegion(e.target.value);
  };

  const onSearchChanged = (e: ChangeEvent<HTMLInputElement>) => {
    setCountryName(e.target.value);
  };

  if (isError || isErrorByRegion) {
    console.error(error);
    return <p>Error: {err.message}</p>;
  }
  return (
    <>
      <Header
        region={region}
        countryName={countryName}
        onDropdownChanged={onDropdownChanged}
        onSearchChanged={onSearchChanged}
      />
      {isLoading || isLoadingByRegion || isLoadingByName ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 gap-16 md:grid-cols-3 lg:grid-cols-4 my-4">
          {loadedCountries?.map((country, index) => (
            <CountryCard country={country} key={index} />
          ))}
        </div>
      )}
    </>
  );
};

export default Home;
