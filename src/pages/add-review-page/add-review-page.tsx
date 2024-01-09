import {Rating} from '../../components/rating/rating.tsx';
import Logo from '../../components/logo/logo.tsx';
import UserBlock from '../../components/user-block/user-block.tsx';
import {ChangeEventHandler, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks-index.ts';
import {Link} from 'react-router-dom';
import NotFoundPage from '../not-found-page/not-found-page.tsx';
import {AuthorizationStatus} from '../../components/private-route/private-route.tsx';
import {UnauthUser} from '../../components/unauth-user/unauth-user.tsx';
import {addReviewAction} from '../../store/api-actions.ts';
import {getAuthorizationStatus} from '../../store/user-process/user-selectors.ts';
import {getFilm} from '../../store/film-process/film-selectors.ts';


export function AddReviewPage() {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const film = useAppSelector(getFilm);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const dispatch = useAppDispatch();

  const handleRatingChange: ChangeEventHandler<HTMLInputElement> = (evt) => {
    setRating(parseInt(evt.target.value, 10));
  };

  const handleCommentChange: ChangeEventHandler<HTMLTextAreaElement> = (evt) => {
    setComment(evt.target.value);
  };

  const handleSubmit = () => {
    if (film?.id) {
      dispatch(addReviewAction({comment, rating, id: toString()}));
    }
  };

  if (!film) {
    return <NotFoundPage/>;
  }
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo className={'logo__link'}/>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${film.id}`} className="breadcrumbs__link">{film.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to={`/films/${film.id}/review`} className="breadcrumbs__link">Add review</Link>
              </li>
            </ul>
          </nav>

          {authorizationStatus === AuthorizationStatus.Auth ? <UserBlock/> :
            <UnauthUser/>}
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film.posterImage} alt={`${film.name} poster`}
            width="218" height="327"
          />
        </div>
      </div>

      <div className="add-review">
        <form action="#" className="add-review__form">
          <div className="rating">
            <div className="rating__stars">
              <Rating numberRating={'1'} setRating={handleRatingChange}/>
              <Rating numberRating={'2'} setRating={handleRatingChange}/>
              <Rating numberRating={'3'} setRating={handleRatingChange}/>
              <Rating numberRating={'4'} setRating={handleRatingChange}/>
              <Rating numberRating={'5'} setRating={handleRatingChange}/>
              <Rating numberRating={'6'} setRating={handleRatingChange}/>
              <Rating numberRating={'7'} setRating={handleRatingChange}/>
              <Rating numberRating={'8'} setRating={handleRatingChange}/>
              <Rating numberRating={'9'} setRating={handleRatingChange}/>
              <Rating numberRating={'10'} setRating={handleRatingChange}/>
            </div>
          </div>
          <div className="add-review__text">
            <textarea className="add-review__textarea" name="review-text" id="review-text" data-testid="comment"
              placeholder="Review text" minLength={50} maxLength={400} onChange={handleCommentChange}
            >
            </textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit" onClick={handleSubmit}>Post</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
