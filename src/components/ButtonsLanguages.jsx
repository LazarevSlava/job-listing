import style from './ButtonLanguage.module.css';
import { useCharacteristicsContext } from '../hooks/useCharacteristicsContext';

function ButtonLanguage({ children, parentName }) {
  const { handleSelect, handleRemove } = useCharacteristicsContext();
  return (
    <button onClick={() => handleSelect(children)} className={style.btn}>
      {children}
      {parentName ? <a onClick={() => handleRemove(children)} className={style.close}></a> : ''}
    </button>
  );
}
export { ButtonLanguage };
