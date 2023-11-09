import { Films } from '../../types/film';
import CatalogFilmCard from '../catalog-film-card/catalog-film-card';
import { useState } from 'react';

type CatalogFilmsListProps = {
  films: Films;
}

function CatalogFilmsList({ films }: CatalogFilmsListProps): JSX.Element {
  const [, setActiveFilmId] = useState<number | null>();

  return (
    <>
      <div className="catalog__films-list">
        {films.map(({id: filmId, alt, src}) =>
          (
            <CatalogFilmCard key={filmId} alt={alt} src={src}
              onMouseEnter={() => setActiveFilmId(filmId)}
              onMouseLeave={() => setActiveFilmId(null)}
            />
          ))}
      </div>
      <div className="catalog__more">
        <button className="catalog__button" type="button">
          Show more
        </button>
      </div>
    </>
  );
}

export default CatalogFilmsList;
