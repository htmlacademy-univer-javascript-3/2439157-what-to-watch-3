import {AuthorizationStatus} from '../components/private-route/private-route.tsx';
import {useNavigate} from 'react-router-dom';
import {useAppDispatch} from './hooks-index.ts';
import {postFavoriteFilms} from '../store/api-actions.ts';

export const useFunctionalityButtonList = (authorizationStatus: AuthorizationStatus,
  setInList: (b: boolean) => void,
  isInList: boolean, filmId: string) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  if (authorizationStatus === AuthorizationStatus.Auth) {
    dispatch(postFavoriteFilms({filmId, status: !isInList ? 0 : 1}));
    return () => setInList ? setInList(!isInList) : undefined;
  }
  return () => navigate('/login');
};
