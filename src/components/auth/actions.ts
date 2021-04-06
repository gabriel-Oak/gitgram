import { Dispatch } from 'redux';
import Cookies from 'js-cookie';
import apiService from '../../services/api-service';
import { GithubOauth } from '../../utils/interfaces/github';
import authTypes from './types';

const cookiePrefix = 'gitgram/token';

export const getUser = (code: string) => async (dispatch: Dispatch) => {
  dispatch({ type: authTypes.GET_USER });
  try {
    const { token }: GithubOauth = await apiService.get('/auth/authorize', {
      params: {
        code,
        returnToken: true,
      }
    });    

    Cookies.set(cookiePrefix, token, { expires: 2 },);

    dispatch({
      type: authTypes.GET_USER_SUCCESS,
      payload: { token }
    });
  } catch (_e) {
    Cookies.remove(cookiePrefix);
    dispatch({ type: authTypes.GET_USER_FAIL });
  }
};
