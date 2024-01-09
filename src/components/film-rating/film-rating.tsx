import {getFilmRatingLevel} from '../../const/const.ts';

type FilmRatingProps = {
  rating: number;
  level: number;
  count: number;
}

export function FilmRating({rating, count, level}: FilmRatingProps) {
  return (
    <div className="film-rating" data-testid="film-rating">
      <div className="film-rating__score">{rating}</div>
      <p className="film-rating__meta">
        <span className="film-rating__level">{getFilmRatingLevel(level)}</span>
        <span className="film-rating__count">{count}</span>
      </p>
    </div>
  );
}
