import { ListCards } from './ListCards';
import style from './Main.module.css';
import { useEffect, useState, useMemo } from 'react';
import { useJobsData } from '../hooks/useJobsData';
import { Preloader } from '../components/preloader/Preloader.jsx';
import { FilterBlock } from './FilterBlock';
import { useCharacteristicsContext } from '../hooks/useCharacteristicsContext';

function Main() {
  const { jobs = [], fetchDate } = useJobsData();
  const [isLoading, setLoading] = useState(!jobs.length);
  const { selectedCharacteristics = [] } = useCharacteristicsContext();

  const filteredCharacteristics = useMemo(() => {
    if (!selectedCharacteristics.length) {
      return jobs;
    }

    const filtered = jobs.filter((item) => {
      const { role, level, languages } = item;
      return selectedCharacteristics.every(
        (characteristic) =>
          role.includes(characteristic) ||
          level.includes(characteristic) ||
          languages.includes(characteristic),
      );
    });

    return filtered;
  }, [jobs, selectedCharacteristics]);

  useEffect(() => {
    if (!jobs.length)
      fetchDate().then(() => {
        setLoading(false);
      });
  }, [jobs, fetchDate]);
  return (
    <div className={style.back}>
      {selectedCharacteristics.length ? <FilterBlock /> : ''}
      {isLoading ? <Preloader /> : <ListCards jobs={filteredCharacteristics} />}
    </div>
  );
}

export { Main };
