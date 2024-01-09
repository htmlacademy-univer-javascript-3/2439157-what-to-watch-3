import {NameSpace} from '../../const/const.ts';
import {State} from '../../types/state.ts';

export const getGenre = (state: Pick<State, NameSpace.GenreName>) => state[NameSpace.GenreName].genre;
