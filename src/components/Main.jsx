import { ListCards } from './ListCards';
import style from './Main.module.css';
import { useEffect, useState } from 'react';
import { useJobsData } from '../hooks/useJobsData';
import { Preloader } from '../components/preloader/Preloader.jsx';

function Main() {
  const { jobs = [], fetchDate } = useJobsData();
  const [isLoading, setLoading] = useState(!jobs.length);

  useEffect(() => {
    if (!jobs.length)
      fetchDate().then(() => {
        setLoading(false);
      });
  }, [jobs, fetchDate]);
  return <div className={style.back}>{isLoading ? <Preloader /> : <ListCards jobs={jobs} />}</div>;
}

export { Main };
