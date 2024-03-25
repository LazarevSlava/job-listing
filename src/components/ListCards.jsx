import { CardJob } from './CardJob';
import data from '../data.json';
import './ListCards.css';

function ListCards() {
  return (
    <div className="list">
      {data.map((item) => (
        <CardJob key={item.id} {...item} />
      ))}
    </div>
  );
}

export { ListCards };
