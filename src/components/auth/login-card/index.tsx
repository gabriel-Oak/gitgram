import { Box, Button, Card, CardContent, CircularProgress, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';
import github from '../../../assets/icons/github.svg';
import githubAlt from '../../../assets/icons/github-alt.svg';

interface Props {
  clientId: string;
  loading?: boolean;
}

const LoginCard: React.FC<Props> = ({ clientId, loading }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.container}>
        <Typography variant="h3">
          <Box mr={1} component="span">
            <img src={github} alt="" width={39} height={38} />
          </Box>

          Gitgram
        </Typography>

        <Box mt={2} mb={2}>
          <Typography variant="subtitle1">
            Sing up / Log in with GitHub
          </Typography>
        </Box>

        <Button
          variant="contained"
          color="primary"
          disableElevation
          component="a"
          href={`https://github.com/login/oauth/authorize?client_id=${clientId}`}
          disabled={loading}
        >
          <Box mr={1} height={16}>
            {loading ? (
              <CircularProgress size={16} color="secondary" />
            ) : (
              <img src={githubAlt} />
            )}
          </Box>

          TAKE ME ON
        </Button>
      </CardContent>
    </Card>
  );
}

export default LoginCard;