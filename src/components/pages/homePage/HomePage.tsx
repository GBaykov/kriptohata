// import React from 'react';
// import Videocard from '../../card-videocard';
import './homepage.css';

import Button from '../../button';

export const HomePage = () => {
  const telegramSVG = `<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M20.1789 1.16471C19.9708 0.988389 19.7188 0.871746 19.4498 0.827176C19.1807 0.782606 18.9046 0.811775 18.6508 0.911581L1.34451 7.70846C1.04096 7.82411 0.783845 8.03633 0.612751 8.31246C0.441657 8.58858 0.366072 8.91329 0.397636 9.23658C0.425797 9.55975 0.557963 9.86508 0.774316 10.1068C0.99067 10.3485 1.27955 10.5136 1.59764 10.5772L5.99451 11.4491V16.9428C5.99435 17.24 6.08249 17.5306 6.24773 17.7776C6.41298 18.0246 6.64788 18.217 6.92264 18.3303C7.10448 18.4035 7.2985 18.4417 7.49451 18.4428C7.69152 18.4435 7.88669 18.4049 8.06859 18.3293C8.2505 18.2536 8.41548 18.1424 8.55389 18.0022L10.9914 15.5741L14.6758 18.8178C14.9478 19.0577 15.2975 19.1909 15.6601 19.1928C15.8196 19.1961 15.9784 19.1707 16.1289 19.1178C16.3763 19.0396 16.599 18.8981 16.7749 18.7073C16.9508 18.5166 17.0739 18.2832 17.132 18.0303L20.657 2.63658C20.7186 2.37096 20.7067 2.09356 20.6224 1.83422C20.5382 1.57488 20.3848 1.34342 20.1789 1.16471ZM6.56639 10.0335L1.89764 9.10533L14.9851 3.95846L6.56639 10.0335ZM7.49451 16.9428V12.4991L9.85701 14.5803L7.49451 16.9428ZM15.6695 17.6928L7.94451 10.896L19.0726 2.86158L15.6695 17.6928Z" fill="white"/>
  </svg>`;
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
        <section className="page__actual actual">
          <div className="actual__content">
            <div className="actual__content-head">
              <p className="actual__content-head-title">
                Актуальная информация о ценах и предложениях
              </p>
              <p>Хотите быть в курсе? </p>
            </div>
            <div className="actual__content-info">
              <p className="actual__content-info-text">
                Вступайте в нашу группу в Телеграм, где мы публикуем только актуальную и интересную
                информацию. Мы сами не любим спам!
              </p>
              <Button isMain={true} text="Перейти на канал" />
            </div>
          </div>
        </section>
        <section className="page__questions questions">
          <div className="questions__content">
            <p className="questions__content-title">Остались вопросы?</p>
            <p className="questions__content-text">
              Оставьте запрос и наши специалисты проконсультируют вас по всем интересующим вопросам.
            </p>
            <div className="questions__content-btns">
              <Button isMain={false} text="Оставить заявку" />
              <Button isMain={true} text="Написать в Телеграм" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
