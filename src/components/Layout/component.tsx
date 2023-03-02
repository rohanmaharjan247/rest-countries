import Navbar from '../Navbar/component';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="app">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
