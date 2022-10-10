import React from 'react';
import Videocard from '../card-videocard';

// type IVideocard = {
//   image: string;
//   cryptType: string[];
//   availability?: boolean;
//   name: string;
//   maker: string;
//   memory: string;
//   cost: number;
// };
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
      {/* <h1 className="home-title">HomePage</h1>
      <div className="home-main">HomePage</div> */}
      <Videocard videocard={videocard} />
    </section>
  );
};
