import { Link, Outlet } from 'react-router-dom';
import Header from '../header';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <footer>2022</footer>
    </>
  );
};
export default Layout;
