import { Link, Outlet } from 'react-router-dom';
import Footer from '../footer';
import Header from '../header';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer></Footer>
    </>
  );
};
export default Layout;
