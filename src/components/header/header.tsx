import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="">
        Домой
      </Link>
      <Link to="/videocards" className="header-videocards header-item">
        Видеокарты
      </Link>
      <Link to="/newminers" className="header-newminers header-item">
        Майнеры новые
      </Link>
      <Link to="/oldminers" className="header-oldminers header-item">
        Майнеры Б/У
      </Link>
      <Link to="/howorder" className="header-oldminers header-item">
        Как заказать
      </Link>
    </header>
  );
};
export default Header;
