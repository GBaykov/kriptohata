import { toUnicode } from 'punycode';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { isNull } from 'util';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { InputSlice } from '../../store/reducers/InputReducer';
import './header.css';

const Header = () => {
  // enum Currencu {
  //   Russian = (<span>&#x20bd;</span>),
  //   // Belorussian = '&#3647;',
  // }

  const [inputValue, setInputValue] = useState('');
  const [currencu, setCurrencu] = useState(true);
  const [location, setLocation] = useState(true);
  const { input } = useAppSelector((state) => state.InputReducer);
  const { addInputvalue } = InputSlice.actions;
  const dispatch = useAppDispatch();

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  const onFormSubnit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addInputvalue(inputValue));
  };

  // const searchbarinput = {
  //   background: `url('glass.svg') no-repeat scroll 7px 7px`,
  //   backgroundColor: '#ffffff',
  // };

  function currencyonClick() {
    setCurrencu(!currencu);
  }

  return (
    <header className="header">
      <div className="header-content">
        <div className="header__top top header-wrapper ">
          <div className="top__local-choices choices">
            <p
              className="choices-country choice header-right-item"
              onClick={() => setLocation(!location)}
            >
              Страна: {location ? 'Россия' : 'Беларусь'}
            </p>
            <p
              className="choices-currency choice header-right-item"
              onClick={() => setCurrencu(!currencu)}
            >
              Валюта: {currencu ? <span>&#x20bd;</span> : <span>&#3647;</span>}
            </p>
          </div>
          <div className="header-right right">
            <p className="right-phone1 header-right-item">
              <span className="header-right-item"> +7-926-953-02-69</span>
              <img src="tg-img.svg" alt="" />
            </p>
            <span className="bord header-right-item" />
            <p className="right-phone2 header-right-item">
              <span className="header-right-item"> +375-25-654-23-66</span>
              <img src="tg-img.svg" alt="" />
            </p>
            <span className="bord header-right-item" />
            <p className="right-backcall header-right-item">Обратный звонок</p>
            <span className="bord header-right-item" />
            <div className="right-messengers mess header-right-item">
              <p className="mess-images">
                <img className="insta header-right-item" src="insta.svg" alt="" />
                <img className="viber " src="viber.svg" alt="" />
              </p>
            </div>
            <span className="bord header-right-item" />
            <p className="right-accaunt header-right-item">
              <img src="user.svg" alt="" />
            </p>
          </div>
        </div>
        <div className="header-center header-wrapper">
          <p className="header-logo">
            <img className="header-logo-img" src="image.svg" alt="header-logo" />
            <span className="header-logo-text">
              Крипто<b>Хата</b>
            </span>
          </p>

          <form className="header-searchbar" action="" onSubmit={onFormSubnit}>
            <input
              // style={searchbarinput}
              className="header-searchbar-input"
              type="text"
              placeholder="Поиск"
              onChange={onInputChange}
              value={inputValue}
            />
          </form>

          <div className="headder-center__actions actions">
            <div className="actions-chosen action">
              <img src="star.svg" alt="" />
              <p>Избранное</p>
              <p className="action-count">3</p>
            </div>
            <div className="actions-basket action">
              <img src="basket.svg" alt="" />
              <p>Корзина</p>
              <p className="action-count">1</p>
            </div>
          </div>
        </div>

        <div className="header-nav header-wrapper">
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
      </div>
    </header>
  );
};
export default Header;
