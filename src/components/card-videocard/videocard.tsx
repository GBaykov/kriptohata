import React, { useState } from 'react';

interface IVideocard {
  image: string;
  cryptType: string[];
  availability?: boolean;
  name: string;
  maker: string;
  memory: string;
  cost: number;
}

function Videocard(videocard: IVideocard) {
  // const {} = useAppSelector(state => state.cardReducer)
  // const {increment} = cardSlice.actions
  // const dispatch = useAppDispatch();

  const [count, setCount] = useState(0);

  const backgroundImage = videocard.image ? videocard.image : '';
  const viewStyle = {
    background: backgroundImage,
  };

  return (
    <div className="videocard">
      <div className="videocard__content content">
        <div className="content-view">
          <p className="content-view__crypto"></p>
          <p className="content-view__chosen"></p>
          <p className="content-view__image" style={viewStyle}></p>
          <p className="content-view__order">Под заказ</p>
        </div>
        <div className="content-discription card-disc">
          <p className="card-disc-name"></p>
          <p className="card-disc-type">Видеокарта</p>
          <div className="card-disc__items items">
            <p className="items-text">
              Производитель: <span>{videocard.maker}</span>
            </p>
            <p className="items-text">
              Видеопамять:<span>{videocard.memory}</span>
            </p>
          </div>
          <p className="card-disc__cost">
            <span> $</span>
            <span>{videocard.cost}</span>
          </p>
        </div>
        <div className="videocard__counter counter">
          <p className="counter-count">{count}</p>
          <p className="counter-control control">
            <span
              className="control-minus"
              onClick={() => {
                setCount(count - 1);
              }}
            >
              -
            </span>
            <span
              className="control-plus"
              onClick={() => {
                setCount(count + 1);
              }}
            >
              +
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Videocard;
