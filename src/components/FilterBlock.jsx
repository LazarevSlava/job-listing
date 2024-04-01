import style from './FilterBlock.module.css';
import { ButtonLanguage } from './ButtonsLanguages';
import { useCharacteristicsContext } from '../hooks/useCharacteristicsContext';

function FilterBlock() {
  const { selectedCharacteristics = [], handleClear, handleRemove } = useCharacteristicsContext();

  return (
    <div className={style.filter}>
      <div className={style.btn_block}>
        {selectedCharacteristics.map((item, index) => (
          <ButtonLanguage key={index} handleRemove={handleRemove} isClose>
            {item}
          </ButtonLanguage>
        ))}
      </div>
      <a onClick={handleClear} className={style.clear}>
        Clear
      </a>
    </div>
  );
}
export { FilterBlock };
