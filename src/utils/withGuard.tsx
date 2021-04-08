import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAction } from '../components/auth/actions';
import { StoreState } from '../store/types';

const cookiePrefix = 'gitgram/token';

const withGuard = (Component: FC<any>) => () => {
  const dispatch = useDispatch();
  const snack = useSnackbar();
  const { user, loading } = useSelector((state: StoreState) => state.auth);
  let token: string | undefined;
  
  if (process.browser) {
    const router = useRouter();
    token = Cookies.get(cookiePrefix);
    if (!token) {
      router.replace('/auth');
    } else if (!user && !loading) {
      dispatch(getUserAction(snack));
    }

  }

  return <Component />;
}

export default withGuard;
