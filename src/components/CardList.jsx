import React from 'react';
import Card from './Card';
import { useState, useEffect } from 'react';
import axios from 'axios';

const CardList = () => {
  const [cardData, setCardData] = useState([]);

  const dataUrl = './data/cardData.json';

  useEffect(() => {
    (async () => {
      const response = await axios.get(dataUrl);
      setCardData(response.data);
    })();
  }, []);

  /*  useEffect(()=>{
        axios('./data/cardData.json')
        .then(response=>response.data)
        .then(data=>setCardData(data))
        .catch(error=>{console.log(error)})
    },[])
 */

  /*    useEffect(()=>{
        fetch('http://localhost:3000/data/cardData.json')
        .then(response=>response.json())
        .then(data=>setCardData(data))
        .catch(error=>{console.log(error)})
    },[]) */

  return (
    <div className='card_area'>
      <img
        src='https://via.placeholder.com/1690x600.png'
        className='main-banner'
      />
      <h3>인기 당근알바</h3>
      <ul className='card_wrap'>
        {cardData.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </ul>
    </div>
  );
};

export default CardList;
