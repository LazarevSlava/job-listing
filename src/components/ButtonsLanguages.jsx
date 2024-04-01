import style from './ButtonLanguage.module.css';

function ButtonLanguage({ children, isClose, handleSelect, handleRemove }) {
  return (
    <>
      {isClose ? (
        <button className={style.btn_close} onClick={() => handleRemove(children)}>
          {children}
        </button>
      ) : (
        <button className={style.btn} onClick={() => handleSelect(children)}>
          {children}
        </button>
      )}
    </>
  );
}
export { ButtonLanguage };
