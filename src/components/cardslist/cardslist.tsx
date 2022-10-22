import React, { useState } from 'react';
import Videocard, { IVideocard } from '../card-videocard/videocard';
import './cardslist.css';

export interface IcardsList {
  cards: Array<IVideocard>;
}

function CardsList(props: IcardsList) {
  // const {} = useAppSelector(state => state.cardReducer)
  // const {increment} = cardSlice.actions
  // const dispatch = useAppDispatch();
  const { cards } = props;
  const cardlist = cards.map((card) => {
    return <Videocard videocard={card} key={Math.random() * Math.random()} />;
  });

  return <section className="cardslist">{cardlist}</section>;
}

export default CardsList;
