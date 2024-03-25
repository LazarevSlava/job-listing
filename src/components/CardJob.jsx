import { baseUrl } from '../constants';
import './CardJob.css';
import { ButtonLanguage } from './ButtonsLanguages';

function CardJob(props) {
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
  } = props;

  const logoBase = baseUrl + logo.slice(1);

  return (
    <div className="card">
      <img className="img-logo" src={logoBase} alt="logo" />
      <div className="first-line">
        <p className="company">{company}</p>
        {props.new ? <p className="new">NEW!</p> : ''}
        {featured ? <p className="featured">FEATURED</p> : ''}
      </div>
      <p className="position">{position}</p>
      <div className="third-line">
        <p className="postedAt">
          {postedAt}
          <span>&middot;</span>
        </p>
        <p className="contract">
          {contract}
          <span>&middot;</span>
        </p>
        <p className="location">{location}</p>
      </div>
      <hr />
      <div className="btn-block">
        {<ButtonLanguage key={role} item={role} />}
        {<ButtonLanguage key={level} item={level} />}
        {languages.map((item, index) => (
          <ButtonLanguage key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export { CardJob };
