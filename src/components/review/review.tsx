import {formatReviewDate} from '../../const/date-time.ts';

export type ReviewProps = {
  text: string;
  author: string;
  rating: number;
  date: string;
}

export function Review({text, author, date, rating}:ReviewProps) {
  const formattedDate = formatReviewDate(date);

  return (
    <div className="review" data-testid="review">
      <blockquote className="review__quote">
        <p className="review__text">{text}</p>

        <footer className="review__details">
          <cite className="review__author">{author}</cite>
          <time className="review__date" dateTime={formattedDate}>{formattedDate}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
}
