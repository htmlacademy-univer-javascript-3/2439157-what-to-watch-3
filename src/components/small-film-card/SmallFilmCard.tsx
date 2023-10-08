type SmallFilmCardProps = {
  src: string;
  alt: string;
}

function SmallFilmCard({ src: imageSrc, alt: filmName }: SmallFilmCardProps): JSX.Element {
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
        <a className="small-film-card__link" href="film-page.html">
          {filmName}
        </a>
      </h3>
    </article>
  )
}

export default SmallFilmCard;
