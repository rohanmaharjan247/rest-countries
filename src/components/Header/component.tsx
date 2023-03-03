import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
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
          className="rounded-sm px-12 py-2.5 w-full bg-light-gray-800 dark:bg-dark-blue-400"
          placeholder="Search..."
        />
      </div>
      <select
        id="countries"
        className="bg-light-gray-800 border border-gray-300 text-light-gray-800 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-dark-blue-400 dark:border-dark-blue-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option defaultValue={'FO'}>Filter by Option</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>
    </div>
  );
};

export default Header;
