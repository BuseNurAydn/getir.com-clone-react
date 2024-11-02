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
    <div className='container mx-auto px-2 md:px-4 xl:px-16'>
      <div className='grid md:grid-cols-3 gap-4'>
        {cards.map((card, key) => <CardItem key={key} card={card} />)}
      </div>
    </div>
  )
}
export default Cards;