import { CardJob } from './CardJob';
import data from '../data.json';

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
