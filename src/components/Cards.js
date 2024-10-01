import React from 'react';
import { useState, useEffect } from 'react';
import CardData from '../api/cards.json';
import CardItem from '../components/ui/CardItem'


export default function Cards() {

  const [cards, setCards] = useState([]);

  useEffect(() => {
    //İSTEK
    setCards(CardData);
  }, []);

  return (
    <div className='container mx-auto px-16'>
      <div className='grid grid-cols-3 gap-x-4'>
        {cards.map((card, key) => <CardItem key={key} card={card} />)}
      </div>
    </div>
  )
}