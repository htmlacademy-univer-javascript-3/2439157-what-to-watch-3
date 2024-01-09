import {AuthorizationStatus} from '../../components/private-route/private-route.tsx';
import {NameSpace} from '../../const/const.ts';
import {State} from '../../types/state.ts';

export const getAuthorizationStatus = (state: Pick<State, NameSpace.User>): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
