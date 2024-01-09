import {Genre} from '../../types/genre.ts';
import cn from 'classnames';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks-index.ts';
import {Link} from 'react-router-dom';
import {getGenre} from '../../store/genre-process/genre-selectors.ts';
import {changeGenre} from '../../store/genre-process/genre-process.ts';

type CatalogGenresProps = {
  nameGenres: Genre;
}

export function GenresItem({nameGenres}: CatalogGenresProps) {
  const dispatch = useAppDispatch();
  const activeGenre = useAppSelector(getGenre);
  const changeGenreHandler = () => {
    dispatch(changeGenre(nameGenres));
  };
  return (
    <li className={cn(
      'catalog__genres-item',
      {'catalog__genres-item--active': activeGenre === nameGenres})}
    >
      <Link to={'#'} className="catalog__genres-link" onClick={changeGenreHandler}>{nameGenres}</Link>
    </li>
  );
}

