import {Genre} from '../../types/genre.ts';
import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const/const.ts';

export type GenreProcess = {
  genre: Genre;
};
const initialState: GenreProcess = {
  genre: Genre.AllGenres,
};
export const genreProcess = createSlice({
  name: NameSpace.GenreName,
  initialState,
  reducers: {
    changeGenre(state, action:{ payload: Genre }){
      state.genre = action.payload;
    }
  },
});
export const {changeGenre} = genreProcess.actions;
