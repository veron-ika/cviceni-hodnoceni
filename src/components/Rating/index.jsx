import { useState } from 'react';
import { Star } from '../Star';
import './style.css';

export const Rating = () => {
 
  const [rating, setRating] = useState(0);
  
  return (
    <div className="rating">
      <div className="rating__value">{rating}</div>
      <div className="rating__stars">
        <Star glowing={rating >= 1} onSelect={setRating} value={1} />
        <Star glowing={rating >= 2} onSelect={setRating} value={2} />
        <Star glowing={rating >= 3} onSelect={setRating} value={3} />
        <Star glowing={rating >= 4} onSelect={setRating} value={4} />
        <Star glowing={rating === 5} onSelect={setRating} value={5} />
      </div>
    </div>
  );
};
