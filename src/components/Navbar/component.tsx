import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface NavbarProps {
  toggleMode: () => void;
}

const Navbar = ({ toggleMode }: NavbarProps) => {
  return (
    <nav className="flex justify-between items-center bg-white drop-shadow-md shadow-dark-blue-800 dark:bg-dark-blue-400 px-4 md:px-8 py-8">
      <div className="font-bold">Where in the world?</div>
      <div className="hover:cursor-pointer" onClick={toggleMode}>
        <span className="mr-2">
          <FontAwesomeIcon icon={faMoon} />
        </span>
        Dark Mode
      </div>
    </nav>
  );
};

export default Navbar;
