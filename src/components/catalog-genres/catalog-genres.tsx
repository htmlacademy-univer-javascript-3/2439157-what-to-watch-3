import {GenresItem} from './genres-item.tsx';
import {GENRES} from '../../const/const';

export function CatalogGenres() {
  return (
    <ul className="catalog__genres-list">
      { GENRES.map((itemGenre) =>(
        <GenresItem nameGenres={itemGenre} key={itemGenre}/>))}
    </ul>
  );
}
