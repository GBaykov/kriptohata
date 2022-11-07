// import React from 'react';
// import Videocard from '../../card-videocard';
import './homepage.css';

import Button from '../../button';

export const HomePage = () => {
  return (
    <main className="main home-page">
      <div className=" page">
        <section className=" page__heading-block heading">
          <div className="heading-content ">
            <h1 className="heading-title">Профессиональное оборудование для майнинга</h1>
            <p className="heading-text">
              Майнеры и видеокарты с доставкой по России и РБ. Актуальные цены и предложения в нашем
              телеграм-канале
            </p>
            <p className="heading-btn">
              <Button isMain={true} text="Перейти в Телеграм" />
            </p>
          </div>
        </section>
        <section className="page__discount discount">
          <div className="discount__wrapper">
            <img className="discount-coins" src="coins.png" alt="" />
            <div className="discount__content">
              <p className="discount__content-text">
                <span className="discount__content-percent">%</span>
                <span>Скидка всем зарегистрированным пользователям</span>
              </p>
              <Button isMain={false} text="Зарегистрироваться" />
            </div>
          </div>
        </section>
        <section className="page__catalog catalog">
          <div className="catalog-content">
            <p className="catalog-title">Каталог</p>
            <div className="catalog__cards">
              <div className="catalog__cards-card">
                {/* <p className="catalog__cards-card-img">
                  {' '} */}
                <img src="homepage/new-miners.png" alt="new-miners image" />
                {/* </p> */}
                <p>Майнеры новые</p>
              </div>
              <div className="catalog__cards-card">
                {/* <p className="catalog__cards-card-img"> */}
                <img src="homepage/old-miners.png" alt="old-miners image" />
                {/* </p> */}
                <p>Майнеры б/у</p>
              </div>
              <div className="catalog__cards-card">
                {/* <p className="catalog__cards-card-img"> */}
                <img src="homepage/videocards.png" alt="videocards image" />
                {/* </p> */}
                <p>Видеокарты</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
