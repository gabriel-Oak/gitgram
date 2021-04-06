import { Dispatch } from 'redux';
import apiService from '../../services/api-service';
import { GithubOauth } from '../../utils/interfaces/github';
import authTypes from './types';

export const getUser = (code: string) => async (dispatch: Dispatch) => {
  dispatch({ type: authTypes.GET_USER });
  try {
    console.log(code);

    const { token }: GithubOauth = await apiService.get('/auth/authorize', {
      params: {
        code,
        returnToken: true,
      }
    });

    dispatch({
      type: authTypes.GET_USER_SUCCESS,
      payload: { token }
    });
  } catch (_e) {
    dispatch({ type: authTypes.GET_USER_FAIL });
  }
};
