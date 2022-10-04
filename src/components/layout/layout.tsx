import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header className="layout">
        <Link to="/" className=""></Link>
        <Link to="/videocards" className="videocards"></Link>
        <Link to="/newminers" className="new-miners"></Link>
        <Link to="/oldminers" className="old-miners"></Link>
      </header>
      <Outlet />
      <footer>2022</footer>
    </>
  );
};
export default Layout;
