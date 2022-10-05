import { NavLink } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__top top">
        <div className="header-wrapper">
          <div className="top__local-choices choices">
            <div className="choices-country choice">
              Страна
              <select name="country">
                <option value="1">Россия</option>
                <option value="2">Беларусь</option>
              </select>
            </div>
            <div className="choices-currency choice">
              Валюта
              <select name="currency">
                <option value="1">Рубли</option>
                <option value="2">Бел.руб</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="header__search"></div>
      <div className="header-wrapper">
        <NavLink to="/videocards" className="header-videocards header-item">
          Видеокарты
        </NavLink>
        <NavLink to="/newminers" className="header-newminers header-item">
          Майнеры новые
        </NavLink>
        <NavLink to="/oldminers" className="header-oldminers header-item">
          Майнеры Б/У
        </NavLink>
        <NavLink to="/howorder" className="header-oldminers header-item">
          Как заказать
        </NavLink>
      </div>
    </header>
  );
};
export default Header;
