import React from 'react';
import LoginCard from '../../src/components/auth/login-card';

interface Props {
  clientId: string;
}

const AuthPage: React.FC<Props> = ({ clientId }) => (
  <LoginCard clientId={clientId} />
);

export default AuthPage;

export const getStaticProps = () => {
  return {
    props: {
      clientId: process.env.GITHUB_CLIENT,
    }
  }
}
