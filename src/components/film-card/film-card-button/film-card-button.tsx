import {ReactNode} from 'react';

type ButtonFilmCardProps = {
  children?: ReactNode;
  height: string;
  width: string;
  xlinkHref: string;
  nameButton: string;
  className: string;
  onClick: () => void;
}

export function FilmCardButton({children, height, width, xlinkHref, nameButton, className, onClick}: ButtonFilmCardProps) {
  return (
    <button className={className} type="button"
      onClick={onClick}
    >
      <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height}>
        <use xlinkHref={xlinkHref}></use>
      </svg>
      <span>{nameButton}</span>
      {children}
    </button>
  );
}
