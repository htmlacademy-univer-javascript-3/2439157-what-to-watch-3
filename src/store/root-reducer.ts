import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const/const.ts';
import {FilmProcess} from './film-process/film-process.ts';
import {userProcess} from './user-process/user-process.ts';
import {genreProcess} from './genre-process/genre-process.ts';

export const rootReducer = combineReducers({
  [NameSpace.Film]: FilmProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.GenreName]: genreProcess.reducer,
});
