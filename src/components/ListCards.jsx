import style from './ListCards.module.css';
import { CardJob } from './CardJob';

function ListCards({ jobs = [] }) {
  return (
    <div className={style.list}>
      {jobs.map((item) => (
        <CardJob key={item.id} {...item} />
      ))}
    </div>
  );
}

export { ListCards };
