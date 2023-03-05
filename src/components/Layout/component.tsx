import Navbar from '../Navbar/component';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Layout = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    }
  }, [darkMode]);

  const toggleMode = () => {
    setDarkMode((dark) => !dark);
  };
  return (
    <>
      <Navbar toggleMode={toggleMode} />
      <main className="container mx-auto p-4 md:px-8 md:py-4">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
