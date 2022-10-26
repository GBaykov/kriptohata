import React, { useState } from 'react';
import './videocard.css';

export interface IVideocard {
  image: string;
  cryptType: string[];
  availability?: boolean;
  name: string;
  maker: string;
  memory: string;
  cost: number;
}

interface VideocardProps {
  videocard: IVideocard;
}

function Videocard(props: VideocardProps) {
  // const {} = useAppSelector(state => state.cardReducer)
  // const {increment} = cardSlice.actions
  // const dispatch = useAppDispatch();
  const { videocard } = props;

  const [count, setCount] = useState(0);

  const backgroundImage = videocard.image ? videocard.image : 'img_default.png';
  const viewStyle = {
    // background: backgroundImage,
    // backgroundImage: backgroundImage,
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: 'center',
    // backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    color: '#0C0C0C',
    backgroundColor: '#E9E9E9',
    width: '100%',
    height: '240px',
  };

  return (
    <div className="videocard">
      <div className="videocard__content content">
        <div className="content-view" style={viewStyle}>
          <div className="contents-view__top">
            <p className="content-view__crypto">{videocard.cryptType.join(', ')}</p>
            <p className="content-view__chosen"></p>
          </div>
          <p className="content-view__order">Под заказ</p>
        </div>
        <div className="content-discription card-disc">
          <p className="card-disc-name">
            <strong>{videocard.name}</strong>
          </p>
          <p className="card-disc-type">Видеокарта</p>
          <div className="card-disc__items items">
            <p className="items-text">
              <strong>Производитель:</strong> <span>{videocard.maker}</span>
            </p>
            <p className="items-text">
              <strong>Видеопамять:</strong>
              <span>{videocard.memory} Гб</span>
            </p>
          </div>
          <p className="card-disc__cost">
            <span className="current-cost"> $</span>
            <span className="current-cost">{videocard.cost * 0.98}</span>
            <span className="deleted-cost"> $</span>
            <span className="deleted-cost">
              <del>{videocard.cost}</del>
            </span>
          </p>
        </div>
        <div className="videocard__counter counter">
          <p className="counter-count">{count}</p>
          <p className="counter-control control">
            <button
              className="control-plus control-change"
              onClick={() => {
                setCount(count + 1);
              }}
            >
              {/* <span className="control-minus-dash"></span>
              <span className="control-plus-dash"></span> */}
              <span className="plus"></span>
            </button>
            <span className="vertical-barear"></span>
            <button
              className="control-minus control-change"
              onClick={() => {
                setCount(count - 1);
              }}
            >
              <span className="control-minus-dash"></span>
            </button>
          </p>
        </div>
        <div className="add-videocard">
          <button className="add-btn">Добавить в корзину</button>
        </div>
      </div>
    </div>
  );
}

export default Videocard;
