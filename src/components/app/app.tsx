import MainPage from '../../pages/main-page/main-page.tsx';
import { Route, Routes,} from 'react-router-dom';
import NotFoundPage from '../../pages/not-found-page/not-found-page.tsx';
import {SignInPage} from '../../pages/sign-in-page/sign-in-page.tsx';
import MyListPage from '../../pages/my-list-page/my-list-page.tsx';
import {MoviePage} from '../../pages/movie-page/movie-page.tsx';
import {MovieReviewsPage} from '../../pages/movie-page/movie-reviews-page.tsx';
import PrivateRoute from '../private-route/private-route.tsx';
import {AddReviewPage} from '../../pages/add-review-page/add-review-page.tsx';
import {MovieDetailsPage} from '../../pages/movie-page/movie-details-page.tsx';
import {useAppSelector} from '../../hooks/hooks-index.ts';
import {Spinner} from '../../pages/loading-page/spinner.tsx';
import {filmsDataLoading} from '../../store/film-process/film-selectors.ts';
import {getAuthorizationStatus} from '../../store/user-process/user-selectors.ts';
import {PlayerPage} from '../../pages/player-page/player-page.tsx';

function App() {
  const isFilmsDataLoading = useAppSelector(filmsDataLoading);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  if (isFilmsDataLoading) {
    return (
      <Spinner/>
    );
  }
  return (
    <Routes>
      <Route path={'/'} element={<MainPage/>}/>
      <Route path={'/login'} element={<SignInPage/>}/>
      <Route path={'/mylist'} element={<PrivateRoute authorizationStatus={authorizationStatus}><MyListPage/></PrivateRoute>}/>
      <Route path={'/films/:id'} element={<MoviePage/>}/>
      <Route path={'/films/:id/review'} element={<PrivateRoute authorizationStatus={authorizationStatus}><MovieReviewsPage/></PrivateRoute>}/>
      <Route path={'/films/:id/addreview'} element={<PrivateRoute authorizationStatus={authorizationStatus}><AddReviewPage/></PrivateRoute>}/>
      <Route path={'/player-page/:id'} element={<PlayerPage/>}/>
      <Route path={'/films/:id/details'} element={<MovieDetailsPage/>}></Route>
      <Route path={'*'} element={<NotFoundPage/>}/>
    </Routes>
  );
}

export default App;
