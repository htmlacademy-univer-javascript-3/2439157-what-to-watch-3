type FilmCardTextItemProps = {
  name: string;
  value: string | number;
}

export function FilmCardDetails({name, value}: FilmCardTextItemProps) {
  return (
    <p className="film-card__details-item" data-testid='film-card__details-item'>
      <strong className="film-card__details-name">{name}</strong>
      <span className="film-card__details-value">{value}</span>
    </p>
  );
}
