import style from './ButtonLanguage.module.css';

function ButtonLanguage({ children }) {
  return <button className={style.btn}>{children}</button>;
}
export { ButtonLanguage };
