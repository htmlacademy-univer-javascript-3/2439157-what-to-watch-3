import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/main-page/main-page';
import { AppRoute, AuthorizationStatus } from './const';
import SignInPage from './pages/sign-in-page/sign-in-page';
import MyListPage from './pages/my-list-page/my-list-page';
import FilmPage from './pages/film-page/film-page';
import AddReviewPage from './pages/add-review-page/add-review-page';
import PlayerPage from './pages/player-page/player-page';
import NotFoundPage from './pages/not-found-page/not-found-page';
import PrivateRoute from './private-route';
import { HelmetProvider } from 'react-helmet-async';
import { Films } from './types/film';
import { useState } from 'react';

type AppProps = {
  promoFilmName: string;
  promoFilmGenre: string;
  promoFilmYear: number;
  films: Films;
}

function App(props: AppProps): JSX.Element {
  const [film,] = useState(props.films[0]);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main} element={<MainPage {...props} />} />
          <Route path={AppRoute.SignIn} element={<SignInPage />} />
          <Route
            path={AppRoute.MyList}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                <MyListPage films={props.films} />
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Film} element={<FilmPage film={film} />} />
          <Route path={AppRoute.AddReview} element={<AddReviewPage film={film} />} />
          <Route path={AppRoute.Player} element={<PlayerPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
