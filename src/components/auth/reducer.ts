import { handleActions } from 'redux-actions';
import authTypes from './types';

export interface AuthState {
  loading: boolean;
}

const INITIAL_STATE: AuthState = {
  loading: false,
}

const auth = handleActions({
  [authTypes.GET_USER]:(state) => ({ ...state, loading: true }),
  [authTypes.GET_USER_SUCCESS]: (state) => ({ ...state, loading: false }),
  [authTypes.GET_USER_FAIL]: (state) => ({ ...state, loading: false }),
}, INITIAL_STATE);

export default auth;
