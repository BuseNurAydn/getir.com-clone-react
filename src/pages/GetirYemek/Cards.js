import React from 'react';
import { useState, useEffect } from 'react';
import CardData from '../../api/cardsYemek.json'
import CardItem from '../../ui/CardItem'


const Cards = () => {

  const [cards, setCards] = useState([]);

  useEffect(() => {
    //İSTEK
    setCards(CardData);
  }, []);

  return (
    <div className='md:container md:mx-auto px-4 md:px-2 xl:px-16'>
      <div className='grid md:grid-cols-3 gap-4'>
        {cards.map((card, key) => <CardItem key={key} card={card} />)}
      </div>
    </div>
  )
}
export default Cards;