import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { FC } from 'react';

const cookiePrefix = 'gitgram/token';

const withGuard = (Component: FC<any>) => () => {
  let token: string | undefined;

  if (process.browser) {
    const router = useRouter();
    token = Cookies.get(cookiePrefix);
    if (!token) router.replace('/auth');
  }

  return token ? <Component /> : <></>;
}

export default withGuard;
