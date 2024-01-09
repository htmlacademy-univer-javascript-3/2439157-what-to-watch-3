import {ReactNode} from 'react';
import {Link} from 'react-router-dom';

type ButtonPlayProps = {
  children?: ReactNode;
  height: string;
  width: string;
  xlinkHref: string;
  nameButton: string;
  className: string;
  path: string;
}

export function FilmCardButtonPlay({children, height, width, xlinkHref, nameButton, className, path}: ButtonPlayProps) {
  return (
    <Link to={path} className={className} type="button">
      <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height}>
        <use xlinkHref={xlinkHref}></use>
      </svg>
      <span>{nameButton}</span>
      {children}
    </Link>
  );
}
