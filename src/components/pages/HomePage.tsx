import React from 'react';
import Videocard from '../card-videocard';

const videocard = {
  image: '',
  cryptType: ['TS', 'BCH', 'BSV', 'DSA'],
  availability: true,
  name: 'ASIC Antminer S19 95T',
  maker: 'ASUS',
  memory: '16, 18, 24',
  cost: 4000,
};

export const HomePage = () => {
  return (
    <section className="home">
      <Videocard videocard={videocard} />
    </section>
  );
};
