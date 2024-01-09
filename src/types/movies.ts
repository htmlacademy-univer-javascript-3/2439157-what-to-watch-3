import {Genre} from './genre.ts';

export type FilmsProps = {
  posterImage: string;
  previewImage: string;
  backgroundImage: string;
  name: string;
  genre: Genre;
  released: number;
  id: string;
  description: string;
  rating: number;
  scoresCount: number;
  director: string;
  starring: string[];
  videoLink: string;
  backgroundColor: string;
  runTime: number;
  isFavorite: boolean;
  previewVideoLink: string;
}
export type MoviesProps = {
  genre: Genre;
  id: string;
  name: string;
  previewImage: string;
  previewVideoLink: string;
}
