import { baseUrl } from '../constants';
import style from './CardJob.module.css';
import { ButtonLanguage } from './ButtonsLanguages';
import { useCharacteristicsContext } from '../hooks/useCharacteristicsContext';

function CardJob(props) {
  const { handleSelect } = useCharacteristicsContext();

  const {
    company,
    logo,
    position,
    postedAt,
    contract,
    location,
    featured,
    languages,
    role,
    level,
    new: isNew,
  } = props;

  const logoBase = baseUrl + logo.slice(1);

  return (
    <div className={`${style.card} ${featured ? style.leftSide : ''}`}>
      <img className={style.img_logo} src={logoBase} alt="logo" />
      <div className={style.first_line}>
        <p className={style.company}>{company}</p>
        {isNew ? <p className={style.new}>NEW!</p> : ''}
        {featured ? <p className={style.featured}>FEATURED</p> : ''}
      </div>
      <p className={style.position}>{position}</p>
      <div className={style.third_line}>
        <p className={style.postedAt}>
          {postedAt}
          <span className={style.dot}></span>
        </p>
        <p className={style.contract}>
          {contract}
          <span className={style.dot}> </span>
        </p>
        <p className={style.location}>{location}</p>
      </div>
      <hr />
      <div className={style.btn_block}>
        {
          <ButtonLanguage key={role} handleSelect={handleSelect}>
            {role}
          </ButtonLanguage>
        }
        {
          <ButtonLanguage key={level} handleSelect={handleSelect}>
            {level}
          </ButtonLanguage>
        }
        {languages.map((lang, index) => (
          <ButtonLanguage key={index} handleSelect={handleSelect}>
            {lang}
          </ButtonLanguage>
        ))}
      </div>
    </div>
  );
}

export { CardJob };
