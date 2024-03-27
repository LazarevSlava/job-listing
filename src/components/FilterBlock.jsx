import style from './FilterBlock.module.css';
import { ButtonLanguage } from './ButtonsLanguages';
import { useCharacteristicsContext } from '../hooks/useCharacteristicsContext';

function FilterBlock() {
  const { selectedCharacteristics = [], handleClear } = useCharacteristicsContext();
  const close = true;
  return (
    <div className={style.filter}>
      <div className={style.btn_block}>
        {selectedCharacteristics.map((item, index) => (
          <ButtonLanguage close={close} key={index}>
            {item}
          </ButtonLanguage>
        ))}
      </div>
      <span onClick={() => handleClear()} className={style.clear}>
        Clear
      </span>
    </div>
  );
}
export { FilterBlock };
