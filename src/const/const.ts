import {Genre} from '../types/genre';

export const GENRES: Genre[] = [Genre.AllGenres,
  Genre.Drama,
  Genre.Comedy,
  Genre.Crime,
  Genre.Documentary,
  Genre.Horror,
  Genre.KidsAndFamily,
  Genre.Romance,
  Genre.SciFi,
  Genre.Thriller];

export enum APIRoute {
  Films = '/films',
}

export enum APIRoute {
  Login = '/login',
  Logout = '/logout',
}

export const COUNT_SIMILAR_MOVIES = 4;

export enum NameSpace {
  GenreName = Genre.SciFi,
  Film = 'FILM',
  User = 'USER',
}

export const SignInError = {
  InvalidEmail: 'Please enter a valid email address.',
  InvalidPassword: 'Please use at least one number and one letter in your password',
} as const;

export const ValidationPattern = {
  Email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
  Password: /([0-9].*[a-zA-Z])|([a-zA-Z].*[0-9])/,
} as const;

const RATING_VALUE = {
  BAD: 3,
  NORMAL: 5,
  GOOD: 8,
  VERY_GOOD: 10,
};
export function getFilmRatingLevel(rating: number | undefined): string {
  if (rating === undefined) {
    return 'No rating';
  }
  if (rating < RATING_VALUE.BAD) {
    return 'Bad';
  }
  if (RATING_VALUE.BAD <= rating && rating < RATING_VALUE.NORMAL) {
    return 'Normal';
  }
  if (RATING_VALUE.NORMAL <= rating && rating < RATING_VALUE.GOOD) {
    return 'Good';
  }
  if (RATING_VALUE.GOOD <= rating && rating < RATING_VALUE.VERY_GOOD) {
    return 'Very good';
  }
  if (rating >= RATING_VALUE.VERY_GOOD) {
    return 'Awesome';
  }
  return 'No rating';
}

export const DATE_FORMAT = 'MMMM D, YYYY';


