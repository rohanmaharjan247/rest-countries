import CountryCard from '../CountryCard/component';
import Header from '../../../components/Header/component';
import { ChangeEvent, useEffect, useState } from 'react';
import {
  getStatus,
  selectAllCountries,
  selectCountriesByRegionOrName,
} from '../../slices/countrySlice';
import { useAppSelector } from '../../../app/hook';
import { Country } from '../../models/Country';
import { LoadingState } from '../../models/LoadingState';

const Home = () => {
  const [region, setRegion] = useState<string>();
  const [countryName, setCountryName] = useState<string>();
  const [loadedCountries, setLoadedCountries] = useState<Country[]>([]);

  const allCountries = useAppSelector(selectAllCountries);
  const countriesByRegion = useAppSelector((state) =>
    selectCountriesByRegionOrName(state, { region, countryName })
  );
  const status = useAppSelector(getStatus);
  useEffect(() => {
    if (!countryName && !region) {
      setLoadedCountries(allCountries);
    } else {
      setLoadedCountries(countriesByRegion);
    }
  }, [region, countryName, allCountries]);

  const onDropdownChanged = (e: ChangeEvent<HTMLSelectElement>) => {
    const regionName = e.target.value === 'FO' ? undefined : e.target.value;
    setRegion(regionName);
  };

  const onSearchChanged = (e: ChangeEvent<HTMLInputElement>) => {
    const countryName = e.target.value;
    setCountryName(countryName);
  };

  return (
    <>
      <Header
        region={region}
        countryName={countryName}
        onDropdownChanged={onDropdownChanged}
        onSearchChanged={onSearchChanged}
      />
      {status === LoadingState.PENDING ? (
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
