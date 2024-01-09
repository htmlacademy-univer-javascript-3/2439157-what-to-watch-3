import Logo from '../../components/logo/logo.tsx';
import Copyright from '../../components/copyright/copyright.tsx';
import {FilmCardSolo} from '../../components/film-card/film-card-solo.tsx';
import {Tab} from '../../components/tabs/tab.tsx';
import {Review} from '../../components/review/review.tsx';
import {useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks-index.ts';
import {ShowSimilar} from '../../components/show-more/show-similar.tsx';
import {AuthorizationStatus} from '../../components/private-route/private-route.tsx';
import UserBlock from '../../components/user-block/user-block.tsx';
import {UnauthUser} from '../../components/unauth-user/unauth-user.tsx';
import {useEffect} from 'react';
import {fetchCommentsMovie} from '../../store/api-actions.ts';
import NotFoundPage from '../not-found-page/not-found-page.tsx';
import {getAuthorizationStatus} from '../../store/user-process/user-selectors.ts';
import {getComments, getFilm} from '../../store/film-process/film-selectors.ts';


export function MovieReviewsPage() {
  const {id} = useParams<string>();
  const film = useAppSelector(getFilm);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const dispatch = useAppDispatch();
  const comments = useAppSelector(getComments);
  useEffect(() => {
    if (id) {
      dispatch(fetchCommentsMovie(id));
    }
  }, [id, dispatch]);
  if (!film) {
    return <NotFoundPage/>;
  }
  return (
    <>
      <section className="film-card film-card--full" data-testid="movie-reviews-page">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film?.backgroundImage} alt={film?.name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo className={'logo__link'}/>
            {authorizationStatus === AuthorizationStatus.Auth ? <UserBlock/> :
              <UnauthUser/>}
          </header>

          <FilmCardSolo nameMovie={film.name} genre={film.genre} date={film.released} id={film.id}/>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film?.posterImage} alt={film?.name} width="218" height="327"/>
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <Tab className={'film-nav__item'} name={'Overview'} link={`/films/${String(id)}`}/>
                  <Tab className={'film-nav__item'} name={'Details'}
                    link={`/films/${String(id)}/details`}
                  />
                  <Tab className={'film-nav__item film-nav__item--active'} name={'Reviews'}
                    link={`/films/${String(id)}/review`}
                  />
                </ul>
              </nav>

              <div className="film-card__reviews film-card__row">
                <div className="film-card__reviews-col">
                  {comments.map((i) => (
                    <Review text={i.comment} author={i.user} rating={i.rating} date={i.date} key={i.id}/>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <ShowSimilar/>
        <footer className="page-footer">
          <Logo className={'logo__link logo__link--light'}/>
          <Copyright/>
        </footer>
      </div>
    </>
  );
}
