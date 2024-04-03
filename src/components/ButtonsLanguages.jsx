import style from './ButtonLanguage.module.css';

function ButtonLanguage({ children, isClose, onClick }) {
  const handleClick = () => {
    onClick(children);
  };

  const buttonClassName = isClose ? `${style.btn} ${style.close}` : style.btn;

  return (
    <button className={buttonClassName} onClick={handleClick}>
      {children}
    </button>
  );
}
export { ButtonLanguage };
