import style from './ButtonLanguage.module.css';
import { useCharacteristicsContext } from '../hooks/useCharacteristicsContext';

function ButtonLanguage({ children, close }) {
  const { handleSelect, handleRemove } = useCharacteristicsContext();
  return (
    <>
      <p onClick={() => handleSelect(children)} className={style.btn}>
        {children}
        {close ? (
          <button onClick={() => handleRemove(children)} className={style.close}></button>
        ) : (
          ''
        )}
      </p>
    </>
  );
}
export { ButtonLanguage };
