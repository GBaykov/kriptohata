import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { InputSlice } from '../../store/reducers/InputReducer';
import './header.css';

const Header = () => {
  const [inputValue, setInputValue] = useState('');
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

  return (
    <header className="header">
      <div className="header-content">
        <div className="header__top top header-wrapper ">
          <div className="top__local-choices choices">
            <div className="choices-country choice header-right-item">
              Страна
              <select name="country">
                <option value="1">Россия</option>
                <option value="2">Беларусь</option>
              </select>
            </div>
            <div className="choices-currency choice header-right-item">
              Валюта
              <select name="currency">
                <option value="1">Рубли</option>
                <option value="2">Бел.руб</option>
              </select>
            </div>
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
            <img src="image.svg" alt="header-logo" />
            КриптоХата
          </p>
          <div className="header-searchbar">
            <form action="" onSubmit={onFormSubnit}>
              <input type="text" onChange={onInputChange} value={inputValue} />
            </form>
          </div>
          <div className="header-chosen">
            <img src="star.svg" alt="" />
          </div>
          <div className="header-basket">
            <img src="basket.svg" alt="" />
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
