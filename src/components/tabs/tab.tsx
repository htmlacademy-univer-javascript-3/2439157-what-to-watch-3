import {Link} from 'react-router-dom';

type FilmNavListProps = {
  className: string;
  name: string;
  link: string;
}

export function Tab({className, name, link}: FilmNavListProps) {
  return (
    <li className={className}>
      <Link to={link} className="film-nav__link" data-testid='tab'>{name}</Link>
    </li>
  );
}
