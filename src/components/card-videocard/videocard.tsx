import React, { FC } from 'react';

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
    const backgroundImage = videocard.image ? videocard.image : 
  const viewStyle = {
    background: videocard.image,
  };

  return (
    <div className="videocard">
      <div className="videocard__content content">
        <div className="content-view">
            
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
      </div>
    </div>
  );
}

export default Videocard;
