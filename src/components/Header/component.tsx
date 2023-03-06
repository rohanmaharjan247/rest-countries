import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ChangeEvent, useState } from 'react';

interface HeaderProps {
  region: string | undefined;
  countryName: string | undefined;
  onDropdownChanged: (e: ChangeEvent<HTMLSelectElement>) => void;
  onSearchChanged: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Header = ({
  region,
  countryName,
  onDropdownChanged,
  onSearchChanged,
}: HeaderProps) => {
  return (
    <div className="flex flex-col justify-between gap-4 my-4 md:flex-row">
      <div className="relative z-10">
        <div className="absolute z-20 left-5 bottom-2.5">
          <FontAwesomeIcon
            icon={faSearch}
            className="dark:text-light-gray-800"
          />
        </div>
        <input
          type="text"
          className="rounded-sm px-12 py-2.5 w-full drop-shadow-md shadow-dark-blue-800 bg-white text-dark-blue-800 dark:bg-dark-blue-400 dark:text-white dark:shadow-dark-blue-400"
          placeholder="Search..."
          value={countryName}
          onChange={onSearchChanged}
        />
      </div>
      <select
        id="countries"
        className="select-dropdown"
        onChange={onDropdownChanged}
        value={region}
      >
        <option defaultValue="FO" value="FO">
          Filter by Option
        </option>
        <option value="africa">Africa</option>
        <option value="americas">Americas</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  );
};

export default Header;
