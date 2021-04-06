import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { FC } from 'react';

const cookiePrefix = 'gitgram/token';

const withGuard = (Component: FC<any>) => () => {
  if (process.browser) {
    const router = useRouter();
    const token = Cookies.get(cookiePrefix);
    if (!token) router.replace('/auth');
  }

  return <Component />;
}

export default withGuard;
