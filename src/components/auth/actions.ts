import { Dispatch } from 'redux';
import Cookies from 'js-cookie';
import apiService from '../../services/api-service';
import { GithubOauth, GithubUser } from '../../utils/interfaces/github';
import authTypes from './types';
import { ProviderContext } from 'notistack';

const cookiePrefix = 'gitgram/token';

export const getTokenAction = (code: string, snack: ProviderContext) => async (dispatch: Dispatch) => {
  dispatch({ type: authTypes.GET_TOKEN });
  try {
    const { token }: GithubOauth = await apiService.get('/auth/authorize', {
      params: {
        code,
        returnToken: true,
      }
    });

    Cookies.set(cookiePrefix, token, { expires: 2 },);

    dispatch({
      type: authTypes.GET_TOKEN_SUCCESS,
      payload: { token }
    });
  } catch (e) {
    Cookies.remove(cookiePrefix);
    dispatch({ type: authTypes.GET_TOKEN_FAIL });
    snack.enqueueSnackbar(e.message || e, { variant: 'error' });
  }
};

export const getUserAction = (snack: ProviderContext) => async (dispatch: Dispatch) => {
  dispatch({ type: authTypes.GET_USER });
  try {
    const { user }: { user: GithubUser } = await apiService.get('user/me');

    dispatch({
      type: authTypes.GET_USER_SUCCESS,
      payload: { user },
    });
  } catch (e) {
    Cookies.remove(cookiePrefix);
    dispatch({ type: authTypes.GET_USER_FAIL });
    snack.enqueueSnackbar(e.message || e, { variant: 'error' });
  };
}

export const logOutAction = () => {
  Cookies.remove(cookiePrefix);
  return { type: authTypes.LOG_OUT };
} 
