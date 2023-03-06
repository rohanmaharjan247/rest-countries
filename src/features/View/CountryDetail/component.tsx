import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';
import { SerializedError } from '@reduxjs/toolkit';
import { useAppSelector } from '../../../app/hook';
import { selectCountriesById } from '../../slices/countrySlice';

const CountryDetail = () => {
  const { countryName } = useParams();

  const country = useAppSelector((state) =>
    selectCountriesById(state, countryName || '')
  );

  // const [country] = countries ?? [];
  // const err = error as SerializedError;

  const [nativeNameObject] = Object.keys(country?.name.nativeName || {});
  const [currency] = Object.keys(country?.currencies || {});
  const [language] = Object.keys(country?.languages || {});

  // if (isLoading) return <p>Loading...</p>;
  // if (isError) return <p>{err.message}</p>;

  return (
    <div>
      <div className="my-8 ">
        <Link
          to="/"
          className="px-6 py-2 bg-white text-dark-blue-800 drop-shadow-md shadow-dark-blue-800 dark:bg-dark-blue-400 dark:text-white"
        >
          <span className="mr-4">
            <FontAwesomeIcon icon={faArrowLeftLong} />
          </span>
          Back
        </Link>
      </div>
      <div className="flex gap-4 flex-col md:flex-row md:gap-8">
        <div>
          <img src={country?.flags?.svg} width="600" height="400" />
        </div>
        <div className="md:py-8">
          <h2 className="text-lg md:text-2xl font-bold my-4">
            {country?.name?.common}
          </h2>
          <div className="flex flex-col gap-4 md:flex-row md:mb-8 md:justify-between md:min-w-md md:w-96">
            <ul className="text-sm">
              <li className="mb-2">
                <span className="mr-1">Native Name:</span>
                <span className="text-dark-blue-800 dark:text-light-gray-800">
                  {country?.name?.nativeName[nativeNameObject]?.common}
                </span>
              </li>
              <li className="mb-2">
                <span className="mr-1">Population:</span>
                <span className="text-dark-blue-800 dark:text-light-gray-800">
                  {country?.population?.toLocaleString()}
                </span>
              </li>
              <li className="mb-2">
                <span className="mr-1">Region:</span>
                <span className="text-dark-blue-800 dark:text-light-gray-800">
                  {country?.region}
                </span>
              </li>
              <li className="mb-2">
                <span className="mr-1">Sub Region:</span>
                <span className="text-dark-blue-800 dark:text-light-gray-800">
                  {country?.subregion}
                </span>
              </li>
              <li className="mb-2">
                <span className="mr-1">Capital:</span>
                <span className="text-dark-blue-800 dark:text-light-gray-800">
                  {country?.capital}
                </span>
              </li>
            </ul>
            <ul className="text-sm">
              <li className="mb-2">
                <span className="mr-1">Top Level Domain:</span>
                <span className="text-dark-blue-800 dark:text-light-gray-800">
                  {country?.tld?.join(',')}
                </span>
              </li>
              <li className="mb-2">
                <span className="mr-1">Currencies:</span>
                <span className="text-dark-blue-800 dark:text-light-gray-800">
                  {country?.currencies[currency]?.name}
                </span>
              </li>
              <li className="mb-2">
                <span className="mr-1">Languages:</span>
                <span className="text-dark-blue-800 dark:text-light-gray-800">
                  {country?.languages[language]}
                </span>
              </li>
            </ul>
          </div>
          <div className="my-4">
            <h4 className="my-2 text-md md:my-4">Border Countries</h4>
            <div className="flex gap-4 text-sm">
              {country?.borders?.map((border, index) => (
                <p
                  className="bg-white drop-shadow-md shadow-dark-blue-800 dark:bg-dark-blue-400 dark:text-white px-4 py-1"
                  key={index}
                >
                  {border}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
