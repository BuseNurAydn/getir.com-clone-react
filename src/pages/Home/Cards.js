import React from 'react';
import { useState, useEffect } from 'react';
import CardData from '../../api/cards.json';
import CardItem from '../../ui/CardItem'


const Cards = () => {

  const [cards, setCards] = useState([]);

  useEffect(() => {
    //İSTEK
    setCards(CardData);
  }, []);

  return (
    <div className='md:container md:mx-auto mb-8 md:mb-16 px-4 md:px-2 lg:px-4 xl:px-16'>
      <div className='grid md:grid-cols-3 gap-4'>
        {cards.map((card, key) => (
          <CardItem key={key} card={card} className="sm:mb-4" />
        ))}
      </div>
    </div>

  )
}
export default Cards;