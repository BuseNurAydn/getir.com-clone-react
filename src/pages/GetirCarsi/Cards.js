import React from 'react';
import { useState, useEffect } from 'react';
import CardData from '../../api/cardsCarsi.json'
import CardItem from '../../ui/CardItem'


const Cards = () => {

  const [cards, setCards] = useState([]);

  useEffect(() => {
    //İSTEK
    setCards(CardData);
  }, []);

  return (
    <div className='container mx-auto px-16 mb-16'>
      <div className='grid grid-cols-3 gap-x-4'>
        {cards.map((card, key) => <CardItem key={key} card={card} />)}
      </div>
    </div>
  )
}
export default Cards;