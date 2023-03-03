import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-white dark:bg-dark-blue-400 px-4 md:px-8 py-8">
      <div className="font-bold">Where in the world?</div>
      <div className="">
        <span className="mr-2">
          <FontAwesomeIcon icon={faMoon} />
        </span>
        Dark Mode
      </div>
    </nav>
  );
};

export default Navbar;
