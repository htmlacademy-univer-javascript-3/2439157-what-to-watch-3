import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { MouseEventHandler } from 'react';

export type CatalogFilmCardProps = {
  src: string;
  alt: string;
  onMouseEnter?: MouseEventHandler<HTMLElement> | undefined;
  onMouseLeave?: MouseEventHandler<HTMLElement> | undefined;
}

function CatalogFilmCard({ src, alt, onMouseEnter, onMouseLeave}: CatalogFilmCardProps): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className="small-film-card__image">
        <img
          src={src}
          alt={alt}
          width={280}
          height={175}
        />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={AppRoute.Film}>
          {alt}
        </Link>
      </h3>
    </article>
  );
}

export default CatalogFilmCard;
