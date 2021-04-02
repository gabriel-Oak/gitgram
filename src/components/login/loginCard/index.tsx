import { Card, CardContent } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

// import { Container } from './styles';

const LoginCard: React.FC = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        oi
      </CardContent>
    </Card>
  );
}

export default LoginCard;