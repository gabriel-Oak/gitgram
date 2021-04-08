import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTokenAction } from '../../src/components/auth/actions';
import LoginCard from '../../src/components/auth/login-card';
import { StoreState } from '../../src/store/types';
import { useRouter } from 'next/router'
import Cookies from 'js-cookie';
import { ProviderContext, useSnackbar } from 'notistack';

const cookiePrefix = 'gitgram/token';

interface Props {
  clientId: string;
  getUser: (code: string, snack: ProviderContext) => Promise<void>;
  loading: boolean;
}

const AuthorizePage: React.FC<Props> = ({ clientId, loading, getUser }) => {
  const snack = useSnackbar();
  const router = useRouter();
  const { code } = router.query;
  const token = Cookies.get(cookiePrefix);
  
  if (token) router.replace('/');  

  useEffect(() => {
    if (code && !loading && !token) getUser(String(code), snack);
  }, [code]);

  return (
    <LoginCard
      loading={loading}
      clientId={clientId}
    />
  );
}

const mapState = (state: StoreState) => state.auth; 

export default connect(mapState, {
  getUser: getTokenAction,
})(AuthorizePage);

export const getStaticProps = () => {
  return {
    props: {
      clientId: process.env.GITHUB_CLIENT,
    }
  }
}
