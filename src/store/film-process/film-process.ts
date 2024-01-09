import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const/const.ts';
import {Genre} from '../../types/genre.ts';
import {MoviesProps} from '../../types/movies.ts';
import {MovieInfo} from '../../types/movie-info.ts';
import {CommentsProps} from '../../types/comments.ts';
import {
  fetchCommentsMovie,
  fetchFavoriteFilms,
  fetchFilmAction,
  fetchFilmsAction,
  fetchPromoFilmAction,
  fetchRelatedMovies,
  postFavoriteFilms
} from '../api-actions.ts';


export const InitialNumberFilms = 8;
type InitialState = {
  genre: Genre;
  listFilms: MoviesProps[];
  promoFilm: MovieInfo | null;
  countFilms: number;
  isFilmsDataLoading: boolean;
  isSimilarFilmsLoading: boolean;
  isChoosedFilmLoading: boolean;
  isPromoFilmLoading: boolean;
  isFilmCommentsLoading: boolean;
  isFavoriteFilm: boolean;
  film: MovieInfo | null;
  relatedMovies: MoviesProps[];
  comments: CommentsProps[];
  favoriteFilms: MoviesProps[];
}
export const initialState: InitialState = {
  genre: Genre.AllGenres,
  listFilms: [],
  promoFilm: null,
  countFilms: InitialNumberFilms,
  isFilmsDataLoading: false,
  isSimilarFilmsLoading: false,
  isChoosedFilmLoading: false,
  isPromoFilmLoading: false,
  isFilmCommentsLoading: false,
  isFavoriteFilm: false,
  film: null,
  relatedMovies: [],
  comments: [],
  favoriteFilms: [],
};
export const FilmProcess = createSlice({
  name: NameSpace.Film,
  initialState,
  reducers: {
    showMoreFilms(state) {
      state.countFilms = state.countFilms + 8;
    },
    hideMovies(state) {
      state.countFilms = InitialNumberFilms;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsAction.pending, (state) => {
        state.isFilmsDataLoading = true;
      })
      .addCase(fetchFilmsAction.fulfilled, (state, action) => {
        state.listFilms = action.payload;
        state.isFilmsDataLoading = false;
      })
      .addCase(fetchFilmAction.pending, (state) => {
        state.isChoosedFilmLoading = true;
      })
      .addCase(fetchFilmAction.fulfilled, (state, action) => {
        state.film = action.payload;
        state.isChoosedFilmLoading = false;
      })
      .addCase(fetchRelatedMovies.pending, (state) => {
        state.isSimilarFilmsLoading = true;
      })
      .addCase(fetchRelatedMovies.fulfilled, (state, action) => {
        state.relatedMovies = action.payload;
        state.isSimilarFilmsLoading = false;
      })
      .addCase(fetchPromoFilmAction.pending, (state) => {
        state.isPromoFilmLoading = true;
      })
      .addCase(fetchPromoFilmAction.fulfilled, (state, action) => {
        state.promoFilm = action.payload;
        state.isPromoFilmLoading = false;
      })
      .addCase(fetchCommentsMovie.pending, (state) => {
        state.isFilmCommentsLoading = true;
      })
      .addCase(fetchCommentsMovie.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.isFilmCommentsLoading = false;
      })
      .addCase(fetchFavoriteFilms.pending, (state) => {
        state.isFavoriteFilm = true;
      })
      .addCase(fetchFavoriteFilms.fulfilled, (state, action) => {
        state.favoriteFilms = action.payload;
        state.isFavoriteFilm = false;
      })
      .addCase(postFavoriteFilms.fulfilled, (state, action) => {
        const film = action.payload;
        if (film.isFavorite){
          state.favoriteFilms = state.favoriteFilms.concat(film);
        } else{
          state.favoriteFilms = state.favoriteFilms.filter((item) => item.id !== film.id);
        }
      });
  }
});
export const {showMoreFilms, hideMovies} = FilmProcess.actions;
