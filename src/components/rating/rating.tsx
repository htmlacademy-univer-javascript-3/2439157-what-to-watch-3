import {ChangeEventHandler} from 'react';

type NumberRatingProps = {

  numberRating: string;
  setRating: ChangeEventHandler<HTMLInputElement>;
}

export function Rating({numberRating, setRating}: NumberRatingProps) {
  return (
    <>
      <input className="rating__input" id={`star-${numberRating}`} type="radio"
        name="rating"
        value={numberRating}
        onChange={setRating}
        data-testid={`star-${numberRating}`}
      />
      <label className="rating__label" htmlFor={`star-${numberRating}`}>Rating {numberRating}</label>`
    </>
  );
}
