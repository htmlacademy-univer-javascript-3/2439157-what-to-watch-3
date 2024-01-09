import Copyright from '../../components/copyright/copyright.tsx';
import Logo from '../../components/logo/logo.tsx';
import UserBlock from '../../components/user-block/user-block.tsx';
import {FilmRating} from '../../components/film-rating/film-rating.tsx';
import {FilmCardData} from '../../components/film-card/film-card-data.tsx';
import {FilmCardSolo} from '../../components/film-card/film-card-solo.tsx';
import {Tab} from '../../components/tabs/tab.tsx';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks-index.ts';
import {useParams} from 'react-router-dom';
import {useEffect} from 'react';
import {checkAuthAction, fetchCommentsMovie, fetchFilmAction, fetchRelatedMovies} from '../../store/api-actions.ts';
import {ShowSimilar} from '../../components/show-more/show-similar.tsx';
import {AuthorizationStatus} from '../../components/private-route/private-route.tsx';
import {UnauthUser} from '../../components/unauth-user/unauth-user.tsx';
import NotFoundPage from '../not-found-page/not-found-page.tsx';
import {getAuthorizationStatus} from '../../store/user-process/user-selectors.ts';
import {filmsDataLoading, getFilm} from '../../store/film-process/film-selectors.ts';
import {Spinner} from '../loading-page/spinner.tsx';

export function MoviePage() {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const film = useAppSelector(getFilm);
  const isChoosedFilmLoading = useAppSelector(filmsDataLoading);
  const {id} = useParams();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (id) {
      dispatch(fetchFilmAction(id));
      dispatch(fetchRelatedMovies(id));
      dispatch(fetchCommentsMovie(id));
      dispatch(checkAuthAction());
    }
  }, [id, dispatch]);
  if (isChoosedFilmLoading) {
    return (
      <Spinner />
    );
  }
  if (!film) {
    return <NotFoundPage/>;
  }
  return (
    <>
      <section className="film-card film-card--full" data-testid="movie-page">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name}/>
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
              <img src={film.posterImage} alt={film.name} width="218" height="327"/>
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <Tab className={'film-nav__item film-nav__item--active'} name={'Overview'}
                    link={`/films/${film.id}`}
                  />
                  <Tab className={'film-nav__item'} name={'Details'}
                    link={`/films/${film.id}/details`}
                  />
                  <Tab className={'film-nav__item'} name={'Reviews'}
                    link={`/films/${film.id}/review`}
                  />
                </ul>
              </nav>
              <FilmRating rating={film.rating} level={film.rating} count={film.scoresCount}/>
              <FilmCardData description={film.description} starring={film.starring}
                director={film.director}
              />
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
