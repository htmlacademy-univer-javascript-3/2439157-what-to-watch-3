import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const/const.ts';
import {AuthorizationStatus} from '../../components/private-route/private-route.tsx';
import {checkAuthAction, loginAction, logoutAction} from '../api-actions.ts';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
};
const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
};
export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  }
});
