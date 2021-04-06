import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../src/components/auth/actions';
import LoginCard from '../../src/components/auth/login-card';
import { StoreState } from '../../src/store/types';
import { useRouter } from 'next/router'
import Cookies from 'js-cookie';

const cookiePrefix = 'gitgram/token';

interface Props {
  clientId: string;
}

const AuthorizePage: React.FC<Props> = ({ clientId }) => {
  const loading = useSelector((state: StoreState) => state.auth.loading);
  const dispatch = useDispatch();
  const router = useRouter();
  const { code } = router.query;

  const token = Cookies.get(cookiePrefix);
  if (token) router.replace('/');  

  useEffect(() => {
    if (code && !loading && !token) dispatch(getUser(String(code)));
  }, [code]);

  return (
    <LoginCard
      loading={loading}
      clientId={clientId}
    />
  );
}

export default AuthorizePage;

export const getStaticProps = () => {
  return {
    props: {
      clientId: process.env.GITHUB_CLIENT,
    }
  }
}
