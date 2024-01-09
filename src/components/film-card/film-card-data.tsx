type FilmCardTextProps = {
  description: string;
  director: string;
  starring: string[];
}

export function FilmCardData({description, director, starring}: FilmCardTextProps) {
  return (
    <div className="film-card__text" data-testid='film-card__text'>
      {description}
      <p className="film-card__director"><strong>Director: {director}</strong></p>
      <p className="film-card__starring"><strong>Starring: {starring}</strong></p>
    </div>
  );
}
