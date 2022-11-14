import Videocard, { IVideocard } from '../card-videocard/videocard';
import './slider.css';

export interface IcardsList {
  cards: Array<IVideocard>;
}

const Slider = (props: IcardsList) => {
  const { cards } = props;
  const cardlist = cards.map((card) => {
    return <Videocard videocard={card} key={Math.random() * Math.random()} />;
  });

  return (
    <section className="slider">
      <div className="slider__content">
        <p className="slider__content-head">
          <span className="slider__content-head-title">Рекомендуемые товары</span>
          <span className="slider__content-head-link">
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
        <section className="slider__cardslist">{cardlist}</section>;
      </div>
    </section>
  );
};

export default Slider;
