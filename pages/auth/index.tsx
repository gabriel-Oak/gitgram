import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import React from 'react';
import LoginCard from '../../src/components/auth/login-card';

const cookiePrefix = 'gitgram/token';

interface Props {
  clientId: string;
}

const AuthPage: React.FC<Props> = ({ clientId }) => {
  const router = useRouter();
  const token = Cookies.get(cookiePrefix);
  if (token) router.replace('/');
  
  return (
    <LoginCard clientId={clientId} />
  );
}
export default AuthPage;

export const getStaticProps = () => {
  return {
    props: {
      clientId: process.env.GITHUB_CLIENT,
    }
  }
}
