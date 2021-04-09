import { combineActions, handleActions } from 'redux-actions';
import { GithubUser } from '../../utils/interfaces/github';
import authTypes from './types';

export interface AuthState {
  loading: boolean;
  user: GithubUser | null;
}

const INITIAL_STATE: AuthState = {
  loading: false,
  user: null,
}

const startLoading: any = combineActions(
  authTypes.GET_TOKEN,
  authTypes.GET_USER,
);


const stopLoading: any = combineActions(
  authTypes.GET_TOKEN_SUCCESS,
  authTypes.GET_TOKEN_FAIL,
  authTypes.GET_USER_SUCCESS,
  authTypes.GET_USER_FAIL,
);

const auth = handleActions({
  [startLoading]: (state) => ({ ...state, loading: true }),
  [stopLoading]: (state) => ({ ...state, loading: false }),
  [authTypes.GET_USER_SUCCESS]: (state, { payload }) => ({
    ...state,
    user: payload.user,
  }),
  [authTypes.LOG_OUT]: (state) => ({
    ...state,
    user: null,
  }),
}, INITIAL_STATE);

export default auth;
