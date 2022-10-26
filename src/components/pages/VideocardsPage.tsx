import React from 'react';
import { IVideocard } from '../card-videocard/videocard';
import CardsList from '../cardslist';
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
  ];

  return (
    <section className="videocards">
      <h1 className="videocards-title">VideocardsPage</h1>
      <div className="videocards-main">VideocardsPage</div>
      <CardsList cards={cards} />
    </section>
  );
};
