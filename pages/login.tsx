import React from 'react';
import LoginCard from '../src/components/login/loginCard';

// import { Container } from './styles';

const Login: React.FC = () => {
  return <LoginCard />;
}

export default Login;

export const getStaticProps = () => {
  return {
    props: {}
  }
}
