import { Link } from 'react-router-dom';
import { Country } from '../../models/Country';

export interface CountryProps {
  country: Country;
}

const CountryCard = ({ country }: CountryProps) => {
  return (
    <div className="col-span-1 flex flex-col rounded-sm bg-white shadow-lg dark:bg-neutral-700">
      <Link to={`detail/${country.name.common}`}>
        <img
          className="rounded-t-sm w-full card-img object-cover"
          src={country.flags.svg}
          alt={country.flags.alt}
        />
        <div className="p-6">
          <h3 className="mb-2 text-xl font-bold leading-tight text-neutral-800 dark:text-neutral-50">
            {country.name.common}
          </h3>
          <ul className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            <li>
              <span className="font-bold mr-1">Population:</span>
              <span>{country.population.toLocaleString('en')}</span>
            </li>
            <li>
              <span className="font-bold mr-1">Region:</span>
              <span>{country.region}</span>
            </li>
            <li>
              <span className="font-bold mr-1">Capital:</span>
              <span>{country.capital}</span>
            </li>
          </ul>
        </div>
      </Link>
    </div>
  );
};

export default CountryCard;
