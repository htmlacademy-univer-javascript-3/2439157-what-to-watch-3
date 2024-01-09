import {NameSpace} from '../../const/const.ts';
import {State} from '../../types/state.ts';

export const getPromoFilm = (state: Pick<State, NameSpace.Film>) => state[NameSpace.Film].promoFilm;
export const getFilms = (state: Pick<State, NameSpace.Film>) => state[NameSpace.Film].listFilms;
export const getShowFilms = (state: Pick<State, NameSpace.Film>) => state[NameSpace.Film].countFilms;
export const getFilm = (state: Pick<State, NameSpace.Film>) => state[NameSpace.Film].film;
export const getComments = (state: Pick<State, NameSpace.Film>) => state[NameSpace.Film].comments;
export const getRelatedMovies = (state: Pick<State, NameSpace.Film>) => state[NameSpace.Film].relatedMovies;
export const filmsDataLoading = (state: Pick<State, NameSpace.Film>) => state[NameSpace.Film].isFilmsDataLoading;
export const getFavoriteFilms = (state: Pick<State, NameSpace.Film>)=>state[NameSpace.Film].favoriteFilms;
