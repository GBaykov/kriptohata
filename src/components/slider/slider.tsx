import Videocard, { IVideocard } from '../card-videocard/videocard';
import './slider.css';
import f, { FaChevronLeft, FaChevronRight, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useState } from 'react';

export interface IcardsList {
  cards: Array<IVideocard>;
}

const Slider = ({ cards }: IcardsList) => {
  const [offSet, setOffSet] = useState(0);
  const cardlist = cards.map((card) => {
    return <Videocard videocard={card} key={Math.random() * Math.random()} />;
  });

  const hendleArrowClick = (direction: boolean) => {
    const minShift = 321;
    const maxOffset = -((cardlist.length - 4) * 321);
    setOffSet((currentOffset) => {
      const newOffset: number = direction
        ? Math.max(currentOffset - minShift, maxOffset)
        : Math.min(currentOffset + minShift, 0);
      return newOffset;
    });
  };

  return (
    <section className="slider-block">
      <div className="slider-block__content">
        <p className="slider-block__content-head">
          <span className="slider-block__content-head-title">Рекомендуемые товары</span>
          <span className="slider-block__content-head-link">
            {'Посмотреть все   '}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="#4A5BCF" />
            </svg>
          </span>
        </p>
        <section className="slider-block__carousel carousel">
          <div className="carousel__window">
            <div
              className="carousel__window-cardslist"
              style={{
                transform: `translateX(${offSet}px)`,
              }}
            >
              {cardlist}
            </div>
          </div>
          <div className="arrows">
            {' '}
            <FaChevronLeft className="arrow" onClick={() => hendleArrowClick(false)} />
            <FaChevronRight className="arrow" onClick={() => hendleArrowClick(true)} />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Slider;
