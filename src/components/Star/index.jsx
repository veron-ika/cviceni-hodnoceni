import './style.css';

export const Star = ({ value, onSelect, glowing }) => {
   
  return (
    <div
      value={value}
      onClick={() => {onSelect(value)}}
      className={glowing ? 'rating__star rating__star--on' : 'rating__star'}>
    </div>
  );
};
