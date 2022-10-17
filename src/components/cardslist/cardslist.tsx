import React, { useState } from 'react';
import { IVideocard } from '../card-videocard/videocard';
import './cardslist.css';

export interface IcardsList {
  cards: Array<IVideocard>;
}

function CardsList(props: IcardsList) {
  // const {} = useAppSelector(state => state.cardReducer)
  // const {increment} = cardSlice.actions
  // const dispatch = useAppDispatch();
  const { cards } = props;

  return <section className="cardslist">{cards.map((card) => {})}</section>;
}

export default CardsList;
