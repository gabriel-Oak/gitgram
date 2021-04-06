import React from 'react';
import LoginCard from '../../src/components/auth/loginCard';

interface Props {
  clientId: string;
}

const Auth: React.FC<Props> = ({ clientId }) => (
  <LoginCard clientId={clientId} />
);

export default Auth;

export const getStaticProps = () => {
  return {
    props: {
      clientId: process.env.GITHUB_CLIENT,
    }
  }
}
