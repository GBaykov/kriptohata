import React from 'react';
import { IVideocard } from '../card-videocard/videocard';
import CardsList from '../cardslist';
import Slider from '../slider';
import './page.css';

export const VideocardsPage = () => {
  const videocard: IVideocard = {
    image: '',
    cryptType: ['TS', 'BCH', 'BSV', 'DSA'],
    availability: true,
    name: 'ASIC Antminer S19 95T',
    maker: 'ASUS',
    memory: '16, 18, 24',
    cost: 4000,
  };
  const cards = [
    videocard,
    videocard,
    videocard,
    videocard,
    videocard,
    videocard,
    videocard,
    videocard,
    videocard,
    videocard,
    videocard,
    videocard,
    videocard,
    videocard,
    videocard,
    videocard,
  ];

  return (
    <main className="main">
      {/* <p className="videocards-title">
        Главная / <b> Видеокарты</b>
      </p> */}
      {/* <div className="videocards-main">Видеокарты</div> */}
      <Slider cards={cards} />
    </main>
  );
};
