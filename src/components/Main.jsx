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

    let filtered = [];
    if (selectedCharacteristics.length) {
      filtered = jobs.filter((item) =>
        selectedCharacteristics.some(
          (characteristic) =>
            item.role.includes(characteristic) || item.level.includes(characteristic),
        ),
      );

      // filtered = jobs.filter(
      //   (item) =>
      //     item.role.includes(selectedCharacteristics) ||
      //     item.level.includes(selectedCharacteristics) ||
      //     item.languages.some((item) => selectedCharacteristics.includes(item)),
      // );
    }
    console.log(filtered);
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
