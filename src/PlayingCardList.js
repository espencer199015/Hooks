import React from 'react';
import useAxios from './hooks';
import useFlip from './hooks';  // Import the useFlip hook
import PlayingCard from './PlayingCard';
import './PlayingCardList.css';

function PlayingCardList() {
  const [cards, addCard, removeAllCards] = useAxios('initial_url_here');

  return (
    <div className="PlayingCardList">
      <button onClick={addCard}>Add Card</button>
      <button onClick={removeAllCards}>Remove All Cards</button>  {/* Add remove button */}
      {cards.map((card, index) => (
        <PlayingCard
          key={index}
          front={card.front}
          isFacingUp={isFacingUp}  // Pass isFacingUp to the PlayingCard component
        />
      ))}
    </div>
  );
}

export default PlayingCardList;