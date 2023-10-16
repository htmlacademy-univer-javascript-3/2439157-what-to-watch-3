import { Link } from 'react-router-dom';

type CatalogFilmCardProps = {
  src: string;
  alt: string;
}

function CatalogFilmCard({ src: imageSrc, alt: filmName }: CatalogFilmCardProps): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img
          src={imageSrc}
          alt={filmName}
          width={280}
          height={175}
        />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to="film-page.html">
          {filmName}
        </Link>
      </h3>
    </article>
  );
}

export default CatalogFilmCard;
