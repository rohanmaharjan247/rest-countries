import Navbar from '../Navbar/component';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto p-4 md:px-8 md:py-4">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
