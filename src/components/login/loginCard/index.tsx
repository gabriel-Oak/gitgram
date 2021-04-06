import { Box, Button, Card, CardContent, Container, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';
import github from '../../../assets/icons/github.svg';
import githubAlt from '../../../assets/icons/github-alt.svg';


const LoginCard: React.FC = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Container>
          <Typography variant="h3">
            <Box mr={1} component="span">
              <img src={github} alt="" width={39} height={38} />
            </Box>

            Gitgram
          </Typography>

          <Typography variant="subtitle1">
            Sing up / Log in with GitHub
          </Typography>

          <Button variant="contained" color="primary" disableElevation>
            <Box mr={1}>
              <img src={githubAlt} />
            </Box>

            TAKE ME ON
          </Button>
        </Container>
      </CardContent>
    </Card>
  );
}

export default LoginCard;