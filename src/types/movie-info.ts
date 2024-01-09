import {Genre} from './genre.ts';

export type MovieInfo = {
  id: string;
  name: string;
  posterImage: string;
  backgroundImage: string;
  backgroundColor: string;
  videoLink: string;
  description: string;
  rating: number;
  scoresCount: number;
  director: string;
  starring: string[];
  runTime: number;
  genre: Genre;
  released: number;
  isFavorite: boolean;
}
